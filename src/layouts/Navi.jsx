import React , {useState }from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
export default function Navi() {
  
  const {cartItems} = useSelector(state=> state.cart)
  const [isAuthenticated, setİsAuthenticated] = useState(true)
  const navigate = useNavigate();
  function handleSignOut() {
    setİsAuthenticated(false)
    navigate('/');
  }
  function handleSignIn() {
    setİsAuthenticated(true)
  }



    return (
        <div>
            <Menu inverted fixed="top" >{/*  navigatörün sürekli üstte kalması için */}
                <Container>
                <Menu.Item
                    name='home'   
                    href="/"
                />
                <Menu.Item
                    name='ürün ekle'
                    href="/products/add"
                />

                <Menu.Menu position='right'>
                   {cartItems.length>0&&<CartSummary/>}
                   {isAuthenticated?<SignedIn signOut={handleSignOut}/>: <SignedOut signIn={handleSignIn}/>}
                 </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
