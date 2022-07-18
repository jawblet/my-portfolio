import { useRouter } from 'next/router'

const Back = () => {
const router = useRouter();

return( 
    <div className="subtlelink back" onClick={() => router.push('/#projects')}>
        &#8592; Back
    </div>)
}

export default Back;