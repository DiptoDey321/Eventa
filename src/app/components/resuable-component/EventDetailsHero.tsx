import {
  CheckCircleOutlined,
  HeatMapOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import { Button, Col, Row, Space, Typography } from "antd";
import moment from "moment";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";


const { Title, Text } = Typography;

interface EventCardProps {
  companyName: string;
  isAuthorized: boolean;
  eventTitle: string;
  place: string;
  startTime : string,
  endTime : string
  location: string;
  details: string;
  imageUrl: string | StaticImageData;
  imageAlt: string ;
}

const EventDetailsHero: React.FC<EventCardProps> = ({
  companyName,
  isAuthorized,
  eventTitle,
  place,
  startTime,
  location,
  endTime,
  details,
  imageUrl,
  imageAlt,
}) => {

  function formatTimestampTo12Hour(timestamp:any) {
    const [date, time] = timestamp.split('T');
    let [hours, minutes, seconds] = time.split('.')[0].split(':');
    const suffix = hours >= 12 ? 'PM' : 'AM';
    hours = ((hours % 12) || 12); 
    const formattedTime = `${hours}:${minutes} ${suffix}`;
    return { date, time: formattedTime };
  }
  const router = useRouter();
  
  return (
    <div className="event-details-hero-card">
      <div style={{display:"flex", justifyContent:"end", paddingBottom:"30px", paddingRight: '10px'}}>
        <Button onClick={()=>router.push("/explore")}>
          <RollbackOutlined />
          Back to events
        </Button>
      </div>
      <Row gutter={[16,16]} align="middle">
        <Col xs={24} sm={24} md={12}>
          <div className="upper-part" style={{ marginBottom: "20px" }}>
            <Space>
              <HeatMapOutlined style={{ fontSize: "24px", color: "white" }} />
              <span className="conpany-name">{companyName}</span>
              {isAuthorized && (
                <CheckCircleOutlined
                  style={{ fontSize: "16px", color: "#FFBF00" }}
                />
              )}
            </Space>
          </div>
          <div className="event-title">
            <span>{eventTitle}</span>
          </div>
          <div className="place-time">
            <p style={{color : "white", paddingBottom:'10px'}}>{place}</p>
            <p style={{color : "white", fontSize:"17px"}}>{moment(startTime).format("MMMM D, YYYY")}
              <span> - </span>  {moment(endTime).format("MMMM D, YYYY")}

            </p>

            <p style={{color : "white", fontSize:"17px", paddingTop :'10px'}}>{(formatTimestampTo12Hour(startTime).time)}
              <span> - </span>  {(formatTimestampTo12Hour(endTime).time)}

            </p>
          </div>
         
          <span style={{display:"flex", alignItems:"center", gap:"10px"}}>
            <svg
              id="place_1_"
              data-name="place (1)"
              xmlns="http://www.w3.org/2000/svg"
              width="12.75"
              height="15.703"
              viewBox="0 0 16.75 20.703"
            >
              <g id="Group_17425" data-name="Group 17425">
                <g id="Group_17424" data-name="Group 17424">
                  <path
                    id="Path_19509"
                    data-name="Path 19509"
                    d="M64.133,3.6a8.359,8.359,0,0,0-13.744,0,8.361,8.361,0,0,0-.973,7.7,6.584,6.584,0,0,0,1.213,2l6.081,7.142a.723.723,0,0,0,1.1,0l6.079-7.14a6.591,6.591,0,0,0,1.213-2A8.362,8.362,0,0,0,64.133,3.6Zm-.384,7.2a5.164,5.164,0,0,1-.955,1.564l0,0-5.53,6.495-5.533-6.5a5.167,5.167,0,0,1-.957-1.569,6.916,6.916,0,0,1,.808-6.372,6.911,6.911,0,0,1,11.362,0A6.917,6.917,0,0,1,63.749,10.8Z"
                    transform="translate(-48.886)"
                    fill="#ffbf00"
                  ></path>
                </g>
              </g>
              <g
                id="Group_17427"
                data-name="Group 17427"
                transform="translate(4.321 4.295)"
              >
                <g id="Group_17426" data-name="Group 17426">
                  <path
                    id="Path_19510"
                    data-name="Path 19510"
                    d="M159.808,106.219a4.054,4.054,0,1,0,4.054,4.054A4.058,4.058,0,0,0,159.808,106.219Zm0,6.66a2.606,2.606,0,1,1,2.606-2.606A2.609,2.609,0,0,1,159.808,112.879Z"
                    transform="translate(-155.754 -106.219)"
                    fill="#ffbf00"
                  ></path>
                </g>
              </g>
            </svg>
            <span style={{fontSize:"18px", fontWeight:"400", color : 'white'}}>{location}</span>
          </span>
          
          {/* <div className="details">
            <p>{details}</p>
          </div> */}
        </Col>
        <Col xs={24} sm={24} md={12}>
          <div style={{height:"350px",width:"100%" , overflow:"hidden" }} className="img-container">
            <Image
              src={imageUrl}
              alt="Event Image"
              objectFit="cover"
              width={400}
              height={350}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default EventDetailsHero;
