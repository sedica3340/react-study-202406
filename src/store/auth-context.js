import React from 'react';

// 로그인관련 상태 정보들을 중앙집중관리하는 파일
const AuthContext = React.createContext(
    {
        isLoggedIn: false,
        onLogout: () => {},
    }
)

export default AuthContext;