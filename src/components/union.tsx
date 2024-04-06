import { useState } from 'react';
import Button from './button/Button';
import NegativeImages from './negativeImages/negativeImages';

const Union = () => {
    const [count, setCount] = useState(0);

    const variables = {
        btnPositivo: "No sé como, pero sí",
        btnNegativo: "Obvio que no",
    }

    const handleCountChange = (newCount: number) => {
        setCount(newCount + 1);
    };

    return (
        <>
            <ul role="list" className="link-card-grid" style={{width: '100%'}}>
                <Button texto={variables.btnPositivo} accion="positiva" onCountChange={handleCountChange}/>
                <Button texto={variables.btnNegativo} accion="negativa" onCountChange={handleCountChange}/>
            </ul>
            <NegativeImages count={count}/>
        </>
    );
};

export default Union;