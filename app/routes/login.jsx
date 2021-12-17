import { Alert } from 'react-bootstrap'

export default function index () {
    return (
        <div>
            Login

            {[
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
              ].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                  This is a {variant} alert—check it out!
                </Alert>
              ))}
        </div>
    )
}