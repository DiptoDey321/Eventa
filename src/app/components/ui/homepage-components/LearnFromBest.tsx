"use client";
import "./HomeStyle.css";
import { Col, Input, Row } from "antd";

const LearnFromBest = () => {
  return (
    <div className="learn-from-best">
      <span className="heading"> Learn From The Best</span>
      <div className="events-list-container">
        <Row align="middle">
          <Col md={24} lg={16}>
            {/* main ad  */}
            <div className="left-side">
              <div className="eventa-events-main">
                <div className="events-headers-main">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <g id="Logo" transform="translate(-0.1 -0.1)">
                      <circle
                        id="Ellipse_36"
                        data-name="Ellipse 36"
                        cx="16"
                        cy="16"
                        r="16"
                        transform="translate(0.1 0.1)"
                      />
                      <path
                        id="Path_17"
                        data-name="Path 17"
                        d="M9.5-.011a.724.724,0,0,0-.478.136A4.412,4.412,0,0,1,10.064.4a1.225,1.225,0,0,1,.581.723.714.714,0,0,1-.465.736,2.372,2.372,0,0,1-1.594-.013C7.353,1.467,6.146.983,4.888.686a4.289,4.289,0,0,0-1.981-.1A3.162,3.162,0,0,0,1.061,1.763,2.729,2.729,0,0,0,.719,4.242,1.705,1.705,0,0,0,2,5.4c-.2-.258-.549-.523-.452-.9a1.544,1.544,0,0,1,.5-.981A1.181,1.181,0,0,1,3.087,3.4c1.259.232,2.478.587,3.724.878.839.181,1.646.491,2.5.645.013.949.006,1.9.006,2.846-.458.4-.91.807-1.362,1.213.452.349.9.71,1.355,1.052.006,1.349,0,2.7.006,4.053a3.825,3.825,0,0,1-2.814.607,4.194,4.194,0,0,1-2.711-1.465,8.09,8.09,0,0,1,.936-.5c.884-.432,1.749-.891,2.64-1.3.026-2.123.006-4.253.013-6.377-1.5.639-2.982,1.3-4.486,1.93A4.608,4.608,0,0,1,4.526,4.919a1.75,1.75,0,0,1,.749-.484,2.2,2.2,0,0,0-.891.155A6.959,6.959,0,0,0,.067,9.611,7.4,7.4,0,0,0,.428,13.09a6.662,6.662,0,0,0,2.633,3.182,8,8,0,0,0,1.826.82,6.658,6.658,0,0,0,4.524-.781,5.319,5.319,0,0,0,2.078-2.459,7.124,7.124,0,0,0,.581-2.807,7.988,7.988,0,0,0-.452.787,7.5,7.5,0,0,1-1.975,2.227c.006-1.342-.013-2.691.013-4.034.458-.329.884-.7,1.342-1.02-.42-.439-.9-.813-1.349-1.226-.006-.942.013-1.885-.006-2.833A2.816,2.816,0,0,0,11.9,3.719a2.636,2.636,0,0,0,.013-2.678,2.419,2.419,0,0,0-1.575-.9C10.064.111,9.78,0,9.5-.011ZM4.655,6.455c.013,2.039,0,4.079.006,6.118l-1.039.445a6.808,6.808,0,0,1-1.1-2.349,5.165,5.165,0,0,1,.355-3.337C3.474,7.049,4.068,6.752,4.655,6.455Z"
                        transform="translate(9.833 7.022)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                  <span>HOSTED BY EVENTA</span>
                </div>
                <div className="event-calender-main">
                  <span>28</span>
                  <span>Nov.</span>
                </div>
                <div className="event-main-title">
                  <span>Must see places For Summer</span>
                </div>
                <div className="event-main-des">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam
                    egestas laoreet ligula, ac elementum risus. Aliquam volutpat
                    ex eget elit venenatis, vel luctus arcu pulvinar.{" "}
                  </span>
                </div>
              </div>
              <div className="text-space-container">
                <div className="heading">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45.333"
                    height="46.298"
                    viewBox="0 0 45.333 46.298"
                  >
                    <g
                      id="newsletter-svgrepo-com"
                      transform="translate(-1.737 0)"
                    >
                      <g
                        id="Group_19098"
                        data-name="Group 19098"
                        transform="translate(1.737 0)"
                      >
                        <g
                          id="Group_19097"
                          data-name="Group 19097"
                          transform="translate(0 0)"
                        >
                          <path
                            id="Path_2806"
                            data-name="Path 2806"
                            d="M46.628,34.506l-8.98-5.787a.946.946,0,0,0-.223-.087v-2a.964.964,0,0,0-.965-.965H32.879L25.4,21a.963.963,0,0,0-1.023,0l-7.481,4.676H12.347a.964.964,0,0,0-.965.965v2a.931.931,0,0,0-.223.087l-8.98,5.787a.966.966,0,0,0-.442.811V60.394a.964.964,0,0,0,.965.965h43.4a.964.964,0,0,0,.965-.965V35.317A.967.967,0,0,0,46.628,34.506ZM24.886,22.951l4.353,2.72H20.533ZM13.312,27.6H35.5V49.3s0,0,0,.008l-3.263,1.981-7.852-4.282a.967.967,0,0,0-.94.009l-7.165,4.094-2.968-1.8s0,0,0-.008ZM3.666,35.842l7.716-4.972V48.14L3.666,43.455Zm0,9.869,10.7,6.495-10.7,6.113ZM5.61,59.43l18.323-10.47L43.127,59.43Zm39.531-1.1-10.95-5.972,10.95-6.648Zm0-14.876L37.425,48.14V30.87l7.716,4.972Z"
                            transform="translate(-1.737 -15.061)"
                            fill="#ffbf00"
                          />
                          <path
                            id="Path_2807"
                            data-name="Path 2807"
                            d="M54.821,59.836H66.4a.964.964,0,0,0,.965-.965V53.085a.964.964,0,0,0-.965-.965H54.821a.964.964,0,0,0-.965.965v5.787A.964.964,0,0,0,54.821,59.836Zm.964-5.787H65.43v3.858H55.785Z"
                            transform="translate(-39.388 -37.652)"
                            fill="#ffbf00"
                          />
                          <rect
                            id="Rectangle_2244"
                            data-name="Rectangle 2244"
                            width="15.432"
                            height="1.929"
                            transform="translate(14.468 24.114)"
                            fill="#ffbf00"
                          />
                          <rect
                            id="Rectangle_2245"
                            data-name="Rectangle 2245"
                            width="15.432"
                            height="1.929"
                            transform="translate(14.468 27.972)"
                            fill="#ffbf00"
                          />
                          <path
                            id="Path_2808"
                            data-name="Path 2808"
                            d="M145.161,27.8a.961.961,0,0,0,.682-.283l3.41-3.41a.964.964,0,0,0-1.364-1.364l-3.41,3.41a.965.965,0,0,0,.682,1.646Z"
                            transform="translate(-104.65 -16.229)"
                            fill="#ffbf00"
                          />
                          <path
                            id="Path_2809"
                            data-name="Path 2809"
                            d="M7.046,27.521A.964.964,0,0,0,8.41,26.158L5,22.748a.964.964,0,0,0-1.364,1.364Z"
                            transform="translate(-2.905 -16.229)"
                            fill="#ffbf00"
                          />
                          <path
                            id="Path_2810"
                            data-name="Path 2810"
                            d="M117,6.684a.954.954,0,0,0,.358.069.964.964,0,0,0,.9-.607l1.929-4.823A.965.965,0,1,0,118.4.607L116.467,5.43A.965.965,0,0,0,117,6.684Z"
                            transform="translate(-84.568 0)"
                            fill="#ffbf00"
                          />
                          <path
                            id="Path_2811"
                            data-name="Path 2811"
                            d="M41.955,6.146a.964.964,0,0,0,.9.607.952.952,0,0,0,.358-.069.965.965,0,0,0,.538-1.254L41.817.608a.965.965,0,0,0-1.791.716Z"
                            transform="translate(-29.347 -0.001)"
                            fill="#ffbf00"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span>Hosted Newsletter</span>
                </div>
                <div className="descriptions">
                  <span>
                    Discover budget-savvy tips, incredible transformation
                    stories from top event hosts, and insider secrets to booking
                    fantastic venues. Get it all in your inbox every Thursday.
                  </span>
                </div>

                <div className="input-container">
                  <Input
                    className="input-field"
                    placeholder="Enter your email"
                  />
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 38 38"
                    >
                      <path
                        id="paper-plane-svgrepo-com"
                        d="M0,16.644l10.944,8.208L33.25,4.75,15.922,28.576,28.5,38,38,0ZM9.5,38l7.144-4.75L9.5,28.5Z"
                        fill="#ffbf00"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col md={24} lg={8}>
            <div className="common-margin-top-mobile">
              <div className="eventa-events-sec sce-1">
                <div className="events-headers-sec">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <g id="Logo" transform="translate(-0.1 -0.1)">
                      <circle
                        id="Ellipse_36"
                        data-name="Ellipse 36"
                        cx="16"
                        cy="16"
                        r="16"
                        transform="translate(0.1 0.1)"
                      />
                      <path
                        id="Path_17"
                        data-name="Path 17"
                        d="M9.5-.011a.724.724,0,0,0-.478.136A4.412,4.412,0,0,1,10.064.4a1.225,1.225,0,0,1,.581.723.714.714,0,0,1-.465.736,2.372,2.372,0,0,1-1.594-.013C7.353,1.467,6.146.983,4.888.686a4.289,4.289,0,0,0-1.981-.1A3.162,3.162,0,0,0,1.061,1.763,2.729,2.729,0,0,0,.719,4.242,1.705,1.705,0,0,0,2,5.4c-.2-.258-.549-.523-.452-.9a1.544,1.544,0,0,1,.5-.981A1.181,1.181,0,0,1,3.087,3.4c1.259.232,2.478.587,3.724.878.839.181,1.646.491,2.5.645.013.949.006,1.9.006,2.846-.458.4-.91.807-1.362,1.213.452.349.9.71,1.355,1.052.006,1.349,0,2.7.006,4.053a3.825,3.825,0,0,1-2.814.607,4.194,4.194,0,0,1-2.711-1.465,8.09,8.09,0,0,1,.936-.5c.884-.432,1.749-.891,2.64-1.3.026-2.123.006-4.253.013-6.377-1.5.639-2.982,1.3-4.486,1.93A4.608,4.608,0,0,1,4.526,4.919a1.75,1.75,0,0,1,.749-.484,2.2,2.2,0,0,0-.891.155A6.959,6.959,0,0,0,.067,9.611,7.4,7.4,0,0,0,.428,13.09a6.662,6.662,0,0,0,2.633,3.182,8,8,0,0,0,1.826.82,6.658,6.658,0,0,0,4.524-.781,5.319,5.319,0,0,0,2.078-2.459,7.124,7.124,0,0,0,.581-2.807,7.988,7.988,0,0,0-.452.787,7.5,7.5,0,0,1-1.975,2.227c.006-1.342-.013-2.691.013-4.034.458-.329.884-.7,1.342-1.02-.42-.439-.9-.813-1.349-1.226-.006-.942.013-1.885-.006-2.833A2.816,2.816,0,0,0,11.9,3.719a2.636,2.636,0,0,0,.013-2.678,2.419,2.419,0,0,0-1.575-.9C10.064.111,9.78,0,9.5-.011ZM4.655,6.455c.013,2.039,0,4.079.006,6.118l-1.039.445a6.808,6.808,0,0,1-1.1-2.349,5.165,5.165,0,0,1,.355-3.337C3.474,7.049,4.068,6.752,4.655,6.455Z"
                        transform="translate(9.833 7.022)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                  <span>HOSTED BY EVENTA</span>
                </div>
                <div className="event-calender-sec ">
                  <span>28</span>
                  <span>Nov.</span>
                </div>
                <div className="event-sec-title">
                  <span>Must see places For Summer</span>
                </div>
                <div className="event-sec-des">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </span>
                </div>
              </div>
              <div className="eventa-events-sec sce-2">
                <div className="events-headers-sec">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <g id="Logo" transform="translate(-0.1 -0.1)">
                      <circle
                        id="Ellipse_36"
                        data-name="Ellipse 36"
                        cx="16"
                        cy="16"
                        r="16"
                        transform="translate(0.1 0.1)"
                      />
                      <path
                        id="Path_17"
                        data-name="Path 17"
                        d="M9.5-.011a.724.724,0,0,0-.478.136A4.412,4.412,0,0,1,10.064.4a1.225,1.225,0,0,1,.581.723.714.714,0,0,1-.465.736,2.372,2.372,0,0,1-1.594-.013C7.353,1.467,6.146.983,4.888.686a4.289,4.289,0,0,0-1.981-.1A3.162,3.162,0,0,0,1.061,1.763,2.729,2.729,0,0,0,.719,4.242,1.705,1.705,0,0,0,2,5.4c-.2-.258-.549-.523-.452-.9a1.544,1.544,0,0,1,.5-.981A1.181,1.181,0,0,1,3.087,3.4c1.259.232,2.478.587,3.724.878.839.181,1.646.491,2.5.645.013.949.006,1.9.006,2.846-.458.4-.91.807-1.362,1.213.452.349.9.71,1.355,1.052.006,1.349,0,2.7.006,4.053a3.825,3.825,0,0,1-2.814.607,4.194,4.194,0,0,1-2.711-1.465,8.09,8.09,0,0,1,.936-.5c.884-.432,1.749-.891,2.64-1.3.026-2.123.006-4.253.013-6.377-1.5.639-2.982,1.3-4.486,1.93A4.608,4.608,0,0,1,4.526,4.919a1.75,1.75,0,0,1,.749-.484,2.2,2.2,0,0,0-.891.155A6.959,6.959,0,0,0,.067,9.611,7.4,7.4,0,0,0,.428,13.09a6.662,6.662,0,0,0,2.633,3.182,8,8,0,0,0,1.826.82,6.658,6.658,0,0,0,4.524-.781,5.319,5.319,0,0,0,2.078-2.459,7.124,7.124,0,0,0,.581-2.807,7.988,7.988,0,0,0-.452.787,7.5,7.5,0,0,1-1.975,2.227c.006-1.342-.013-2.691.013-4.034.458-.329.884-.7,1.342-1.02-.42-.439-.9-.813-1.349-1.226-.006-.942.013-1.885-.006-2.833A2.816,2.816,0,0,0,11.9,3.719a2.636,2.636,0,0,0,.013-2.678,2.419,2.419,0,0,0-1.575-.9C10.064.111,9.78,0,9.5-.011ZM4.655,6.455c.013,2.039,0,4.079.006,6.118l-1.039.445a6.808,6.808,0,0,1-1.1-2.349,5.165,5.165,0,0,1,.355-3.337C3.474,7.049,4.068,6.752,4.655,6.455Z"
                        transform="translate(9.833 7.022)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                  <span>HOSTED BY EVENTA</span>
                </div>
                <div className="event-calender-sec ">
                  <span>28</span>
                  <span>Nov.</span>
                </div>
                <div className="event-sec-title">
                  <span>Must see places For Summer</span>
                </div>
                <div className="event-sec-des">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </span>
                </div>
              </div>
              <div className="eventa-events-sec sce-3">
                <div className="events-headers-sec">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <g id="Logo" transform="translate(-0.1 -0.1)">
                      <circle
                        id="Ellipse_36"
                        data-name="Ellipse 36"
                        cx="16"
                        cy="16"
                        r="16"
                        transform="translate(0.1 0.1)"
                      />
                      <path
                        id="Path_17"
                        data-name="Path 17"
                        d="M9.5-.011a.724.724,0,0,0-.478.136A4.412,4.412,0,0,1,10.064.4a1.225,1.225,0,0,1,.581.723.714.714,0,0,1-.465.736,2.372,2.372,0,0,1-1.594-.013C7.353,1.467,6.146.983,4.888.686a4.289,4.289,0,0,0-1.981-.1A3.162,3.162,0,0,0,1.061,1.763,2.729,2.729,0,0,0,.719,4.242,1.705,1.705,0,0,0,2,5.4c-.2-.258-.549-.523-.452-.9a1.544,1.544,0,0,1,.5-.981A1.181,1.181,0,0,1,3.087,3.4c1.259.232,2.478.587,3.724.878.839.181,1.646.491,2.5.645.013.949.006,1.9.006,2.846-.458.4-.91.807-1.362,1.213.452.349.9.71,1.355,1.052.006,1.349,0,2.7.006,4.053a3.825,3.825,0,0,1-2.814.607,4.194,4.194,0,0,1-2.711-1.465,8.09,8.09,0,0,1,.936-.5c.884-.432,1.749-.891,2.64-1.3.026-2.123.006-4.253.013-6.377-1.5.639-2.982,1.3-4.486,1.93A4.608,4.608,0,0,1,4.526,4.919a1.75,1.75,0,0,1,.749-.484,2.2,2.2,0,0,0-.891.155A6.959,6.959,0,0,0,.067,9.611,7.4,7.4,0,0,0,.428,13.09a6.662,6.662,0,0,0,2.633,3.182,8,8,0,0,0,1.826.82,6.658,6.658,0,0,0,4.524-.781,5.319,5.319,0,0,0,2.078-2.459,7.124,7.124,0,0,0,.581-2.807,7.988,7.988,0,0,0-.452.787,7.5,7.5,0,0,1-1.975,2.227c.006-1.342-.013-2.691.013-4.034.458-.329.884-.7,1.342-1.02-.42-.439-.9-.813-1.349-1.226-.006-.942.013-1.885-.006-2.833A2.816,2.816,0,0,0,11.9,3.719a2.636,2.636,0,0,0,.013-2.678,2.419,2.419,0,0,0-1.575-.9C10.064.111,9.78,0,9.5-.011ZM4.655,6.455c.013,2.039,0,4.079.006,6.118l-1.039.445a6.808,6.808,0,0,1-1.1-2.349,5.165,5.165,0,0,1,.355-3.337C3.474,7.049,4.068,6.752,4.655,6.455Z"
                        transform="translate(9.833 7.022)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                  <span>HOSTED BY EVENTA</span>
                </div>
                <div className="event-calender-sec ">
                  <span>28</span>
                  <span>Nov.</span>
                </div>
                <div className="event-sec-title">
                  <span>Must see places For Summer</span>
                </div>
                <div className="event-sec-des">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LearnFromBest;
