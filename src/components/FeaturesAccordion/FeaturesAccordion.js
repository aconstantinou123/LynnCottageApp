import { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import './FeaturesAccordion.css';

const FeaturesAccordion = () => {

  const accommodationOne = 'The cottage has been refurbished in keeping with its quaint nature and has a fully equipped kitchen and bathroom. There is a private garden to the back and front of the property; patio furniture and a small BBQ allow you to dine outside during the warmer weather. The living room has plenty of seating with one 3-seater sofa, one large armchair, one smaller chair and a large pouffe for sitting or putting your feet up. The ingenious dining table unfolds to seat up to 6 people comfortably. There\'s a wood burning stove to keep you cosy on cooler evenings and efficient gas central heating'
  
  const accommodationTwo = 'Entertainment wise, there’s a flat screen TV with a BT box for you to watch mainstream channels, BBC iPlayer and other apps plus Netflix. Free high-speed Wi-Fi is also provided. Overlooking the garden is the fully equipped kitchen which has a full-size electric fan oven, gas hob, microwave, Nespresso Coffee machine, full size fridge freezer and washer dryer. A wide range of utensils, crockery and glasses are provided. The light, well designed bathroom has a full-size bath and electric shower with a heated towel rail and plenty shelving for toiletries. The master bedroom has a comfortable King size bed with a memory foam mattress, a small sofa, built in wardrobe, chest of drawers and 2 bedside tables. The room is beautifully decorated and has a calming feel to it. The second bedroom is furnished with 2 comfortable single beds, a chest of drawers, built in wardrobe and bedside table. The room has been thoughtfully decorated and looks out onto the back garden. A travel cot is available for babies. Outside the cottage, to the front there is a pretty garden and a driveway. Parking is also available on the road outside (no permit needed). To the back there is a secure garden with a back gate overlooking the fields and Drylaw Hill, perfect for children and dogs.'
  
  const accommodationThree = 'There is a lovely garden room with a comfortable sofa/daybed, drop leaf table and electric heater, the perfect place for your evening whisky or G & T. Garden chairs, a portable BBQ, a table and 4 chairs are also provided for you to use.\n\nThe cottage is on one floor; however, it isn\'t suitable for wheelchair access.'
  
  const accommodationFour = 'Dogs are welcome as long as they are well behaved.'

  return (
    <div className='d-flex justify-content-center'>
      <Accordion style={{ width: '75%' }}>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Accommodation</Accordion.Header>
          <Accordion.Body>
          {accommodationOne}
          </Accordion.Body>
          <Accordion.Body>
          {accommodationTwo}
          </Accordion.Body>
          <Accordion.Body>
          {accommodationThree}
          </Accordion.Body>
          <Accordion.Body>
          {accommodationFour}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FeaturesAccordion;
