import React, { useState } from 'react'
import Layout from "./common/Layout";
import { Link } from 'react-router-dom';
import ProductImg from "../assets/images/Mens/seven.jpg";

const CheckOut = () => {

    const[paymentMethod, setPaymentMethod] = useState('cod');

    const handlePaymentMethod = (e) => {
        setPaymentMethod(e.target.value)
    }


  return (
    <Layout>
    <div className="container pb-5">
        <div className="row">
            <div className="col-md-12">
                <nav aria-label="breadcrumb" className='py-4'>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Checkout</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div className="row">
            <div className="col-md-7">
                <h3 className='border-bottom pb-3'><strong>Billing Details</strong></h3>
                <form action="">
                    <div className="row pt-3">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <input type="text" placeholder='Name' className='form-control' />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <input type="text" placeholder='Email' className='form-control' />
                            </div>  
                        </div>
                        <div className="mb-3">
                            <textarea rows={3} placeholder='Address' className='form-control'></textarea>
                        </div>
                        <div className="col-md-6 pt-3">
                            <div className="mb-3">
                                <input type="text" placeholder='City' className='form-control'/>
                            </div> 
                        </div>
                        <div className="col-md-6 pt-3">
                            <div className="mb-3">
                                <input type="text" placeholder='State' className='form-control'/>
                            </div>
                        </div>
                        <div className="col-md-6 pt-3">
                            <div className="mb-3">
                                <input type="text" placeholder='Zip' className='form-control'/>
                            </div>
                        </div>
                        <div className="col-md-6 pt-3">
                            <div className="mb-3">
                                <input type="tel" placeholder='Phone' className='form-control'/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className="col-md-5">
                <h3 className='border-bottom pb-3'><strong>Items</strong></h3>
                <table className='table'>
                    <tbody>
                        <tr>
                            <td width={70}>
                                <img src={ProductImg} alt="" width={50}/>
                            </td>
                            <td width={600}>
                            <h4>Dummy Product Title</h4>
                                <div className='d-flex align-items-center pt-3'>
                                    <span>$10</span>
                                    <div className='ps-3'>
                                        <button className='btn btn-size ms-1'>S</button>
                                    </div>
                                    <div className='ps-5'>
                                        X L
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td width={70}>
                                <img src={ProductImg} alt="" width={50}/>
                            </td>
                            <td width={600}>
                            <h4>Dummy Product Title</h4>
                                <div className='d-flex align-items-center pt-3'>
                                    <span>$10</span>
                                    <div className='ps-3'>
                                        <button className='btn btn-size ms-1'>S</button>
                                    </div>
                                    <div className='ps-5'>
                                        X L
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="row">
                    <div className='col-md-12'>
                        <div className="d-flex justify-content-between border-bottom pb-2">
                            <div>Subtotal</div>
                            <div>$20</div>
                        </div>
                        <div className="d-flex justify-content-between border-bottom py-2">
                            <div>Shipping</div>
                            <div>$5</div>
                        </div>
                        <div className="d-flex justify-content-between border-bottom py-2">
                            <div><strong>Grand Total</strong></div>
                            <div>$25</div>
                        </div>
        
                    </div>
                </div>
                <h3 className='border-bottom pt-4 pb-3'><strong>Payment Methods</strong></h3>
                
                <div className='pt-2'>
                    <input type="radio" onClick={handlePaymentMethod} checked={paymentMethod == 'stripe'} value={'stripe'} />
                    <label htmlFor="" className='form-label ps-2'>Stripe</label>

                    <input type="radio" onClick={handlePaymentMethod} checked={paymentMethod == 'cod'} value={'cod'} className='ms-3' />
                    <label htmlFor="" className='form-label ps-2'>COD</label>
                </div>

                <div className='d-flex py-3'>
                        <Link to="/" className='btn btn-primary'>Pay Now</Link>
                </div>
                
            </div>
        </div>
    </div>
    </Layout>
  )
}

export default CheckOut
