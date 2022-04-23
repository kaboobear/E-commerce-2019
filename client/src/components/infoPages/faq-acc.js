import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

class faqAcc extends React.Component {
  render() {
    return (
      <div>
        <Accordion
          className="history-acc faq-acc"
          allowMultipleExpanded={false}
          allowZeroExpanded={true}
        >
          <AccordionItem className="history-acc-item">
            <AccordionItemHeading>
              <AccordionItemButton className="history-acc-button">
                Доставка
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="history-acc-content">
              <h3>Best choice</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                vitae animi. Quod, excepturi repellendus numquam doloremque
                accusamus temporibus cumque maiores quo error, ad recusandae
                vero accusantium nesciunt beatae, perferendis eligendi aut!
                Pariatur repudiandae unde ratione officia suscipit aliquam
                numquam porro tempora!
              </p>

              <h3>Some facts</h3>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem className="history-acc-item">
            <AccordionItemHeading>
              <AccordionItemButton className="history-acc-button">
                Производство
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="history-acc-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                vitae animi. Quod, excepturi repellendus numquam doloremque
                accusamus temporibus cumque maiores quo error, ad recusandae
                vero accusantium nesciunt beatae, perferendis eligendi aut!
                Pariatur repudiandae unde ratione officia suscipit aliquam
                numquam porro tempora!
              </p>

              <h3>Some facts</h3>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem className="history-acc-item">
            <AccordionItemHeading>
              <AccordionItemButton className="history-acc-button">
                Дизайн на заказ
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="history-acc-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                vitae animi. Quod, excepturi repellendus numquam doloremque
                accusamus temporibus cumque maiores quo error, ad recusandae
                vero accusantium nesciunt beatae, perferendis eligendi aut!
                Pariatur repudiandae unde ratione officia suscipit aliquam
                numquam porro tempora!
              </p>

              <h3>Some facts</h3>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem className="history-acc-item">
            <AccordionItemHeading>
              <AccordionItemButton className="history-acc-button">
                Оптовый заказ
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="history-acc-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                vitae animi. Quod, excepturi repellendus numquam doloremque
                accusamus temporibus cumque maiores quo error, ad recusandae
                vero accusantium nesciunt beatae, perferendis eligendi aut!
                Pariatur repudiandae unde ratione officia suscipit aliquam
                numquam porro tempora!
              </p>

              <h3>Some facts</h3>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem className="history-acc-item">
            <AccordionItemHeading>
              <AccordionItemButton className="history-acc-button">
                Сотрудничество
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="history-acc-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                vitae animi. Quod, excepturi repellendus numquam doloremque
                accusamus temporibus cumque maiores quo error, ad recusandae
                vero accusantium nesciunt beatae, perferendis eligendi aut!
                Pariatur repudiandae unde ratione officia suscipit aliquam
                numquam porro tempora!
              </p>

              <h3>Some facts</h3>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

export default faqAcc;
