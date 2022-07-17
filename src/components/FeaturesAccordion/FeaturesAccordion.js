import { Accordion } from 'react-bootstrap';
import {
  accommodation,
  travel,
  town,
  golf,
  beaches,
  walking,
  places,
  eating,
  shops,
} from './AccordionContent'
import './FeaturesAccordion.css';

const FeaturesAccordion = () => {

  return (
    <div className='d-flex justify-content-center'>
      <Accordion className='accordion'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header><i id='description' className='fa-solid fa-house fa-2xl accordion-icon'></i>Accommodation</Accordion.Header>
          {accommodation}
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
        <Accordion.Header><i id='description' className='fa-solid fa-bus fa-2xl accordion-icon'></i>Getting To and Around</Accordion.Header>
          {travel}
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
        <Accordion.Header><i id='description' className='fa-solid fa-tree-city fa-2xl accordion-icon'></i>East Linton</Accordion.Header>
          {town}
        </Accordion.Item>
        <Accordion.Item eventKey='3'>
        <Accordion.Header><i id='description' className='fa-solid fa-flag fa-2xl accordion-icon'></i>Golf</Accordion.Header>
          {golf}
        </Accordion.Item>
        <Accordion.Item eventKey='4'>
        <Accordion.Header><i id='description' className='fa-solid fa-umbrella-beach fa-2xl accordion-icon'></i>Beaches</Accordion.Header>
          {beaches}
        </Accordion.Item>
        <Accordion.Item eventKey='5'>
        <Accordion.Header><i id='description' className='fa-solid fa-person-walking fa-2xl accordion-icon'></i>Walking</Accordion.Header>
          {walking}
        </Accordion.Item>
        <Accordion.Item eventKey='6'>
        <Accordion.Header><i id='description' className='fa-brands fa-fort-awesome fa-2xl accordion-icon'></i>Places to Visit</Accordion.Header>
          {places}
        </Accordion.Item>
        <Accordion.Item eventKey='7'>
        <Accordion.Header><i id='description' className='fa-solid fa-utensils fa-2xl accordion-icon'></i>Eating Out & Takeaway</Accordion.Header>
          {eating}
        </Accordion.Item>
        <Accordion.Item eventKey='8'>
        <Accordion.Header><i id='description' className='fa-solid fa-basket-shopping fa-2xl accordion-icon'></i>Shops</Accordion.Header>
          {shops}
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FeaturesAccordion;
