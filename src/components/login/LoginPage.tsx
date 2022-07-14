import styles from "./LoginPage.module.css";
import discordLogo from "./Discord-Logo-White.svg";
import {useEffect, useState, useMemo} from "react";
import {Navigate, useLocation} from "react-router-dom"
import axios from "axios";

type LoginMethod = {
    id: string;
    url: string;
    text: string;
    imageUrl: string;
    buttonColor: string;
}

function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
}

export default function LoginPage() {

    const query = useQuery();
    const [methods, setMethods] = useState<LoginMethod[]>([{
        id: 'discord',
        url: '',
        text: 'Log In With Discord',
        imageUrl: discordLogo,
        buttonColor: '#5865F2'
    }]);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if(query.get('code')) {
            if(query.get('type') === 'discord') {
                axios.post('/api/auth/oauth/discord', {
                    code: query.get('code')
                }).then(() => {
                    setLoggedIn(true);
                })
            }
        }
    }, []);

    useEffect(() => {
        axios.get('/api/auth')
            .then(({data}) => {
                setMethods(
                    methods.map(method => ({
                        ...method,
                        url: data[method.id]
                    }))
                )
            })
    }, [])

    if(loggedIn) {
        window.location.assign('/');
    }

    return <div className={styles.container}>
        {
            methods.map(method => <div className={styles.button} style={{background: method.buttonColor}} onClick={() => window.location.assign(method.url)}>
                <img className={styles.image} src={method.imageUrl} crossOrigin=""/>
                <div className={styles.text}>
                    {method.text}
                </div>
            </div>)
        }
    </div>
}