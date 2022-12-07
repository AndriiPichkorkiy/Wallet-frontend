import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { verifyEmailToken } from '../../api/auth';
import { LoaderWrapper } from '../../components/Loader/Loader';
import { ModalLogoutButtonNo } from '../../components/ModalLogout/ModalLogoutComponents';
import { CenterDiv } from './VerifyPage.styled';
// http://localhost:3000/api/user/verify/wQHVl2ypCEHVD7tM94cTC
const VerifyPage = () => {
    const { verifyCode } = useParams();
    const [verify, setVerify] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        verifyEmailToken(verifyCode).then(setVerify).catch(setVerify)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function doRedirect() { navigate("/cabinet", { replace: true }) }

    if (verify?.token) setTimeout(() => {
        doRedirect();
    }, 5000)

    return (
        <>
            <CenterDiv>
                {!verify && <p>While you waiting then we verify your code:{verifyCode} </p>}
                {verify?.token && <div>{verify.message} <p>You will be redirected to your cabinet in 5 seconds</p> <ModalLogoutButtonNo onClick={doRedirect}>Enter cabinet</ModalLogoutButtonNo></div>}
                {verify?.response?.status === 404 && <p>User already has verified or invalid verify code</p>}
            </CenterDiv>
            {!verify && <LoaderWrapper />}


        </>

    );
}

export default VerifyPage;