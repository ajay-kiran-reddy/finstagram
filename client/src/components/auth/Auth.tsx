import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Image,
  Message,
  Modal,
  Segment,
} from "semantic-ui-react";
import finsta_logo from "../../assets/logos/finsta_logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { auth, authSlice } from "./slice";
import LoaderExampleInlineCentered from "../shared/Loader";

interface Props {
  handleOpen: any;
  open: boolean
}

const LoginForm = (props: Props) => {

  const { handleOpen, open } = props;
  const dispatch = useDispatch();
  const authState = useSelector(auth);
  const [showSignUp, setShowSignUp] = useState(false);
  const [formData, setFormData] = useState({ userName: "", password: "", phoneNumber: "", email: "" });

  const handleFormData = (e: any, field: string) => {
    setFormData({ ...formData, [field]: e.target.value })
  }

  const handleSignUpButton = () => {
    dispatch(authSlice.actions.storeSignUpData(formData))
    handleOpen(false)
  };

  const handleSignInButton = () => {
    dispatch(authSlice.actions.storeSignInData(formData));
    handleOpen(false)
  }

  console.log(formData, "[FORM DATA]")

  return <>
    <LoaderExampleInlineCentered active={authState?.isLoading} />
    <Modal open={open} size="tiny">
      <Modal.Header>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <h3>{`${showSignUp ? "Sign Up" : 'Log-in'} to your account`}</h3>
            </Grid.Column>
            <Grid.Column style={{ textAlign: "right" }} >
              <Icon style={{ cursor: "pointer" }} onClick={() => handleOpen(false)} name="close" color="red" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal.Header>

      <Modal.Content>
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column >
            <Form size="tiny">
              <Segment>
                {
                  showSignUp && <>
                    <Form.Input
                      fluid
                      icon="user"
                      iconPosition="left"
                      placeholder="User Name"
                      onChange={(e) => handleFormData(e, "userName")}
                    />
                  </>
                }
                <Form.Input
                  fluid
                  icon="mail"
                  iconPosition="left"
                  placeholder="E-mail address"
                  onChange={(e) => handleFormData(e, "email")}
                />

                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={(e) => handleFormData(e, "password")}
                />

                {showSignUp && <Form.Input
                  fluid
                  icon="mobile alternate"
                  iconPosition="left"
                  placeholder="Phone Number"
                  onChange={(e) => handleFormData(e, "phoneNumber")}
                />}


                {showSignUp ? <Button primary fluid size="large" onClick={handleSignUpButton}>
                  Sign Up
                </Button> : <Button primary fluid size="large" onClick={handleSignInButton}>
                  Login
                </Button>}

              </Segment>
            </Form>
            {showSignUp ? <Message>
              Already had account? <Button style={{ marginLeft: "0.5rem" }} primary basic size="mini" color="instagram" onClick={() => setShowSignUp(false)}>Login</Button>
            </Message> : <Message>
              New to us? <Button style={{ marginLeft: "0.5rem" }} basic primary size="mini" onClick={() => setShowSignUp(true)}>Sign Up</Button>
            </Message>}

          </Grid.Column>
        </Grid>
      </Modal.Content>
    </Modal>
  </>

};

export default LoginForm;
