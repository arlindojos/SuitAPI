import React, { useState, FormEvent } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import { apiOpenBanking, apiSuitAPI, geofusion } from '../../services/api';


import './styles.css';


const SignUp = () => {

    const longitude = -47.041516;
    const latitude = -22.920721;

    const [ userDATA, setUserDATA ] = useState(false);

    const HandleCustomer = (e: FormEvent) => {
        e.preventDefault();

        if (userDATA === true) {
            apiOpenBanking.post('/account-access-consents', {
                "Data": {
                    "Permissions": [
                    "ReadAccountsBasic",
                    "ReadAccountsDetail",
                    "ReadBalances",
                    "ReadBeneficiariesBasic",
                    "ReadBeneficiariesDetail",
                    "ReadDirectDebits",
                    "ReadTransactionsBasic",
                    "ReadTransactionsCredits",
                    "ReadTransactionsDebits",
                    "ReadTransactionsDetail",
                    "ReadProducts",
                    "ReadStandingOrdersDetail",
                    "ReadProducts",
                    "ReadStandingOrdersDetail",
                    "ReadStatementsDetail",
                    "ReadParty",
                    "ReadOffers",
                    "ReadScheduledPaymentsBasic",
                    "ReadScheduledPaymentsDetail",
                    "ReadPartyPSU"
                    ]
                },
                "Risk": {}
            })
            .then((response) => {
                apiOpenBanking.get('/accounts')
                .then((response2) =>{

                    const { Account } = response2.data.Data;

                    console.log(Account);
                    apiSuitAPI.post('/customer', {
                        Account
                    })
                })
                .catch((err2) => {
                    console.log(err2);
                })
            })
            .catch((err) => {

                console.log(err);
            })


            geofusion.get(`v1/consumer?latitude=${latitude}&longitude=${longitude}`)
            .then((rendaprovavel) =>{

                apiSuitAPI.post('/ren daprovavel', {
                    rendaprovavel,
                })
            })

        } else {

        }
    }

    return (
        <div>
           <Container>
               <Row>
                   <Col id="formData">
                        <form onSubmit={ HandleCustomer }>
                            <fieldset>
                                <legend>Acesso a dados bancário</legend>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check 
                                        type="checkbox" 
                                        label="usar dados bancário"
                                        name="perdition"
                                        key="perdition"
                                        checked={userDATA}
                                        onChange={ (e: any) => { setUserDATA(e.target.checked) }}
                                    />
                                </Form.Group>
                            </fieldset>

                            <Button type="submit">Enviar</Button>
                        </form>
                   </Col>
               </Row>
           </Container>
        </div>
    )
}

export default SignUp;