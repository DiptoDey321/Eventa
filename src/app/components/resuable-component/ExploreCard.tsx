import { Card, Button, Typography, Row, Col } from "antd";
import Image, { StaticImageData }  from "next/image";
import { FC } from "react";
const { Title, Text } = Typography;
import people from './../../../../public/users-list.webp'
import './../ui/explore-components/explore.css'

interface TransparentCardProps {
  imageSrc: StaticImageData;
  heading: string;
  location: string;
  date: string;
  onButtonClick: () => void;
}

const ExploreCard: FC<TransparentCardProps> = ({
  imageSrc,
  heading,
  location,
  date,
  onButtonClick,
}) => {
  return (
    <div className="explore-card-container">
      <Card
        style={{
          backgroundColor: "transparent",
          border: "none",
          width: "100%",
        }}
      >
        <Row align="middle" gutter={[16,16]}>
          <Col span={12}>
            <div className="album-image-container">
              <Image src={imageSrc} alt="Card Image" width={350} height={500} />
            </div>
          </Col>
          <Col span={12}>
            <div className="ex-card-details-container">
              <div className="">
                <span className="card-heading">{heading}</span>
                <div className="location-date">
                  <p>
                    <svg
                      width="24"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z"
                        fill="white"
                      />
                    </svg>
                    <span>{location}</span>
                  </p>
                  <p>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_911_4)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6 10.5C5.73478 10.5 5.48043 10.6054 5.29289 10.7929C5.10536 10.9804 5 11.2348 5 11.5V12.5C5 12.7652 5.10536 13.0196 5.29289 13.2071C5.48043 13.3946 5.73478 13.5 6 13.5H7C7.26522 13.5 7.51957 13.3946 7.70711 13.2071C7.89464 13.0196 8 12.7652 8 12.5V11.5C8 11.2348 7.89464 10.9804 7.70711 10.7929C7.51957 10.6054 7.26522 10.5 7 10.5H6ZM6 11.5V12.5H7V11.5H6ZM9 11.5C9 11.2348 9.10536 10.9804 9.29289 10.7929C9.48043 10.6054 9.73478 10.5 10 10.5H11C11.2652 10.5 11.5196 10.6054 11.7071 10.7929C11.8946 10.9804 12 11.2348 12 11.5V12.5C12 12.7652 11.8946 13.0196 11.7071 13.2071C11.5196 13.3946 11.2652 13.5 11 13.5H10C9.73478 13.5 9.48043 13.3946 9.29289 13.2071C9.10536 13.0196 9 12.7652 9 12.5V11.5ZM10 11.5H11V12.5H10V11.5ZM14 10.5C13.7348 10.5 13.4804 10.6054 13.2929 10.7929C13.1054 10.9804 13 11.2348 13 11.5V12.5C13 12.7652 13.1054 13.0196 13.2929 13.2071C13.4804 13.3946 13.7348 13.5 14 13.5H15C15.2652 13.5 15.5196 13.3946 15.7071 13.2071C15.8946 13.0196 16 12.7652 16 12.5V11.5C16 11.2348 15.8946 10.9804 15.7071 10.7929C15.5196 10.6054 15.2652 10.5 15 10.5H14ZM14 11.5V12.5H15V11.5H14ZM5 15.5C5 15.2348 5.10536 14.9804 5.29289 14.7929C5.48043 14.6054 5.73478 14.5 6 14.5H7C7.26522 14.5 7.51957 14.6054 7.70711 14.7929C7.89464 14.9804 8 15.2348 8 15.5V16.5C8 16.7652 7.89464 17.0196 7.70711 17.2071C7.51957 17.3946 7.26522 17.5 7 17.5H6C5.73478 17.5 5.48043 17.3946 5.29289 17.2071C5.10536 17.0196 5 16.7652 5 16.5V15.5ZM7 15.5V16.5H6V15.5H7ZM10 14.5C9.73478 14.5 9.48043 14.6054 9.29289 14.7929C9.10536 14.9804 9 15.2348 9 15.5V16.5C9 16.7652 9.10536 17.0196 9.29289 17.2071C9.48043 17.3946 9.73478 17.5 10 17.5H11C11.2652 17.5 11.5196 17.3946 11.7071 17.2071C11.8946 17.0196 12 16.7652 12 16.5V15.5C12 15.2348 11.8946 14.9804 11.7071 14.7929C11.5196 14.6054 11.2652 14.5 11 14.5H10ZM11 15.5H10V16.5H11V15.5Z"
                          fill="white"
                        />
                        <path
                          d="M18 16.25C18 16.1174 17.9473 15.9902 17.8536 15.8964C17.7598 15.8027 17.6326 15.75 17.5 15.75C17.3674 15.75 17.2402 15.8027 17.1464 15.8964C17.0527 15.9902 17 16.1174 17 16.25V17.707L17.6465 18.3535C17.7408 18.4446 17.8671 18.495 17.9982 18.4938C18.1293 18.4927 18.2547 18.4401 18.3474 18.3474C18.4401 18.2547 18.4927 18.1293 18.4938 17.9982C18.495 17.8671 18.4446 17.7408 18.3535 17.6465L18 17.293V16.25Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6 3.5C6 3.36739 6.05268 3.24021 6.14645 3.14645C6.24021 3.05268 6.36739 3 6.5 3C6.63261 3 6.75979 3.05268 6.85355 3.14645C6.94732 3.24021 7 3.36739 7 3.5V6C7 6.13261 7.05268 6.25979 7.14645 6.35355C7.24021 6.44732 7.36739 6.5 7.5 6.5C7.63261 6.5 7.75979 6.44732 7.85355 6.35355C7.94732 6.25979 8 6.13261 8 6V4.5H13V3.5C13 3.36739 13.0527 3.24021 13.1464 3.14645C13.2402 3.05268 13.3674 3 13.5 3C13.6326 3 13.7598 3.05268 13.8536 3.14645C13.9473 3.24021 14 3.36739 14 3.5V6C14 6.13261 14.0527 6.25979 14.1464 6.35355C14.2402 6.44732 14.3674 6.5 14.5 6.5C14.6326 6.5 14.7598 6.44732 14.8536 6.35355C14.9473 6.25979 15 6.13261 15 6V4.5H16.5C16.8978 4.5 17.2794 4.65804 17.5607 4.93934C17.842 5.22064 18 5.60218 18 6V14.035C18.8758 14.1616 19.6711 14.6151 20.226 15.3044C20.7809 15.9937 21.0541 16.8675 20.9908 17.7501C20.9274 18.6327 20.5321 19.4586 19.8845 20.0616C19.2368 20.6645 18.3849 20.9998 17.5 21C16.9357 21.0005 16.3796 20.8643 15.8794 20.603C15.3792 20.3418 14.9496 19.9634 14.6275 19.5H4.5C4.10218 19.5 3.72064 19.342 3.43934 19.0607C3.15804 18.7794 3 18.3978 3 18V6C3 5.60218 3.15804 5.22064 3.43934 4.93934C3.72064 4.65804 4.10218 4.5 4.5 4.5H6V3.5ZM14 17.5C13.9998 16.6582 14.303 15.8446 14.854 15.2082C15.4049 14.5718 16.1668 14.1553 17 14.035V9H4V18C4 18.1326 4.05268 18.2598 4.14645 18.3536C4.24021 18.4473 4.36739 18.5 4.5 18.5H14.145C14.0486 18.1754 13.9997 17.8386 14 17.5ZM20 17.5C20 18.163 19.7366 18.7989 19.2678 19.2678C18.7989 19.7366 18.163 20 17.5 20C16.837 20 16.2011 19.7366 15.7322 19.2678C15.2634 18.7989 15 18.163 15 17.5C15 16.837 15.2634 16.2011 15.7322 15.7322C16.2011 15.2634 16.837 15 17.5 15C18.163 15 18.7989 15.2634 19.2678 15.7322C19.7366 16.2011 20 16.837 20 17.5Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_911_4">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <span>{date}</span>
                  </p>
                </div>

                <div className="poeples-count">
                  {/* {people.map((person, index) => (
                <Avatar
                  key={index}
                  src={person.avatar}
                  style={{ marginRight: "-10px", border: "2px solid white" }}
                />
              ))} */}
                  <Image
                    src={people}
                    alt="Card Image"
                    width={200}
                    height={50}
                  />
                  <span style={{ marginLeft: "10px" }}> 989+ Going</span>
                </div>
              </div>
              <Button
                className="get-tickets-btn"
                onClick={onButtonClick}
                style={{ marginTop: "10px" }}
              >
                Get Tickets
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ExploreCard;
