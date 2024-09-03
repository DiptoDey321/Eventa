import { Card } from "antd";
import moment from "moment";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface EventCardProps {
  id:string
  imageSrc: string | StaticImageData;
  organizerIcon: StaticImageData;
  organizerName: string;
  heading: string;
  fromDate: string;
  toDate: string;
  location: string;
}

const ExploreItemsCard: FC<EventCardProps> = ({
  id,
  imageSrc,
  organizerIcon,
  organizerName,
  heading,
  fromDate,
  toDate,
  location,
}) => {

  const router = useRouter();

  const goEventDetails = (id:string)=>{
    router.push(`/explore/event-details/${id}`);
  }
  
  return (
    <div className="event-item-container">
      <Card
        onClick={() => goEventDetails(id)}
        className="card-container"
        style={{
          backgroundColor : "rgb(46, 46, 46)",
          borderRadius: "16px",
          overflow: "hidden",
          border: "0px",
          cursor: "pointer",
        }}
      >
        <div style={{height:"220px",width:"100%" , overflow:"hidden" }}>
        <Image
          src={imageSrc}
          alt="Event Image"
          layout="responsive"
          objectFit="cover"
          width={400}
          height={200}
        />
        </div>
       

        <div className="organizer-details">
          <Image src={organizerIcon} alt="Event Image" height={25} width={30} />
          <span>{organizerName}</span>
        </div>

        <div className="item-heading">
          <span>{heading}</span>
        </div>

        <div className="location-date">
          <svg
            id="calendar"
            xmlns="http://www.w3.org/2000/svg"
            width="20.703"
            height="20.703"
            viewBox="0 0 20.703 20.703"
          >
            <g id="Group_969" data-name="Group 969">
              <g id="Group_968" data-name="Group 968">
                <circle
                  id="Ellipse_223"
                  data-name="Ellipse 223"
                  cx="0.913"
                  cy="0.913"
                  r="0.913"
                  transform="translate(14.979 7.307)"
                  fill="#ffbf00"
                />
                <circle
                  id="Ellipse_236"
                  data-name="Ellipse 236"
                  cx="0.913"
                  cy="0.913"
                  r="0.913"
                  transform="translate(14.979 10.96)"
                  fill="#ffbf00"
                />
                <circle
                  id="Ellipse_237"
                  data-name="Ellipse 237"
                  cx="0.913"
                  cy="0.913"
                  r="0.913"
                  transform="translate(14.979 14.614)"
                  fill="#ffbf00"
                />
                <circle
                  id="Ellipse_224"
                  data-name="Ellipse 224"
                  cx="0.913"
                  cy="0.913"
                  r="0.913"
                  transform="translate(11.326 7.307)"
                  fill="#ffbf00"
                />
                <circle
                  id="Ellipse_234"
                  data-name="Ellipse 234"
                  cx="0.913"
                  cy="0.913"
                  r="0.913"
                  transform="translate(11.326 10.96)"
                  fill="#ffbf00"
                />
                <circle
                  id="Ellipse_235"
                  data-name="Ellipse 235"
                  cx="0.913"
                  cy="0.913"
                  r="0.913"
                  transform="translate(11.326 14.614)"
                  fill="#ffbf00"
                />
                <path
                  id="Path_3483"
                  data-name="Path 3483"
                  d="M19.894,14.233a.809.809,0,0,0,.809-.809V4.852a3.239,3.239,0,0,0-3.235-3.235H16.417V.809a.809.809,0,0,0-1.617,0v.809H11.12V.809A.809.809,0,0,0,9.5.809v.809H5.863V.809a.809.809,0,0,0-1.617,0v.809H3.235A3.239,3.239,0,0,0,0,4.852V17.468A3.239,3.239,0,0,0,3.235,20.7H17.468A3.239,3.239,0,0,0,20.7,17.468a.809.809,0,1,0-1.617,0,1.619,1.619,0,0,1-1.617,1.617H3.235a1.619,1.619,0,0,1-1.617-1.617V4.852A1.619,1.619,0,0,1,3.235,3.235H4.246v.809a.809.809,0,0,0,1.617,0V3.235H9.5v.809a.809.809,0,0,0,1.617,0V3.235H14.8v.809a.809.809,0,0,0,1.617,0V3.235h1.051a1.619,1.619,0,0,1,1.617,1.617v8.572A.809.809,0,0,0,19.894,14.233Z"
                  fill="#ffbf00"
                />
                <circle
                  id="Ellipse_226"
                  data-name="Ellipse 226"
                  cx="0.913"
                  cy="0.913"
                  r="0.913"
                  transform="translate(4.019 7.307)"
                  fill="#ffbf00"
                />
                <circle
                  id="Ellipse_230"
                  data-name="Ellipse 230"
                  cx="0.913"
                  cy="0.913"
                  r="0.913"
                  transform="translate(4.019 10.96)"
                  fill="#ffbf00"
                />
                <circle
                  id="Ellipse_231"
                  data-name="Ellipse 231"
                  cx="0.913"
                  cy="0.913"
                  r="0.913"
                  transform="translate(4.019 14.614)"
                  fill="#ffbf00"
                />
                <circle
                  id="Ellipse_229"
                  data-name="Ellipse 229"
                  cx="0.913"
                  cy="0.913"
                  r="0.913"
                  transform="translate(7.672 7.307)"
                  fill="#ffbf00"
                />
                <circle
                  id="Ellipse_232"
                  data-name="Ellipse 232"
                  cx="0.913"
                  cy="0.913"
                  r="0.913"
                  transform="translate(7.672 10.96)"
                  fill="#ffbf00"
                />
                <circle
                  id="Ellipse_233"
                  data-name="Ellipse 233"
                  cx="0.913"
                  cy="0.913"
                  r="0.913"
                  transform="translate(7.672 14.614)"
                  fill="#ffbf00"
                />
              </g>
            </g>
          </svg>

          <div className="from-to">
            <div className="from">
              <span>From:</span>{" "}
              <span className="format">
                {moment(fromDate).format("MMMM D, YYYY")}
              </span>
            </div>
            <div className="from">
              <span>To:</span>{" "}
              <span className="format">
                {moment(toDate).format("MMMM D, YYYY")}
              </span>
            </div>
          </div>
        </div>

        <div className="location-date">
          <svg
            id="place_1_"
            data-name="place (1)"
            xmlns="http://www.w3.org/2000/svg"
            width="16.75"
            height="20.703"
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
                />
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
                />
              </g>
            </g>
          </svg>

          <div className="from-to">
            <div className="from">
              <span>Location:</span> <span className="format">{location}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ExploreItemsCard;
