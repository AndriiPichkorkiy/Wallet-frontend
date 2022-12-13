import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LoaderWrapper } from '../../components/Loader/Loader';
import { ModalLogoutButtonNo } from '../../components/ModalLogout/ModalLogoutComponents';
import { isAuth, newCurrentUser } from '../../redux/auth/authSlice';
import { setToken } from '../../redux/auth/tokenSlice';
import { useLazyCurrentUserQuery } from '../../services/authApi';
import { CenterDiv } from './VerifyPage.styled';

const VerifyPage = () => {
    const { verifyCode } = useParams();
    const [verify, setVerify] = useState(null)
    const dispatch = useDispatch()

    const [currentUser] = useLazyCurrentUserQuery()

    useEffect(() => {
        fetch('https://wallet-project-m5us.onrender.com/api/user/verify/' + verifyCode, {
            method: 'POST'
        }).then(response => response.json()).then(data => {
            setVerify(data);
            dispatch(setToken(data))
        })
            .catch(() => {
                setVerify(404)
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function doRedirect() {
        const user = await currentUser().unwrap()
        dispatch(newCurrentUser(user))
        dispatch(isAuth())
    }

    if (verify?.token) setTimeout(doRedirect, 4800)

    return (
        <>
            <CenterDiv>
                {!verify && <p>While you waiting then we verify your code:{verifyCode} </p>}
                {verify?.token && <div>{verify.message} <p>You will be redirected to your cabinet in 5 seconds</p> <ModalLogoutButtonNo onClick={doRedirect}>Enter cabinet</ModalLogoutButtonNo></div>}
                {verify === 404 && <p>User already has verified or invalid verify code</p>}
            </CenterDiv>
            {!verify && <LoaderWrapper />}


        </>

    );
}

export default VerifyPage;