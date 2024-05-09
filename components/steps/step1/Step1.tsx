import CustomAutoComplete from "@/components/atoms/CustomAutoComplete";
import React, { useRef } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormWatch,
} from "react-hook-form";
import { SignUpSchemaType } from "@/components/Home";
import Menu from "@/components/atoms/Menu";

const Step1 = ({
  control,
  watch,
  categories,
}: {
  watch: UseFormWatch<SignUpSchemaType>;
  control: Control<SignUpSchemaType>;
  categories: { name: string; id: string }[];
}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyByaA2Kqxo7a3SBqaD97S8B5c41kggfycI",
    libraries: ["places"],
  });

  const ref1: any = useRef();
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className=" grid grid-cols-12 p-10">
      <div className=" col-span-8">
        <div className=" mb-3 text-center p-3">
          <h1 className=" text-[#005646] text-4xl font-semibold">Repair</h1>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            <CustomAutoComplete
              label={"Device to be repair"}
              borderRadius={"50%"}
            />
            <Controller
              name={"products"}
              control={control}
              rules={{ required: "This is required field" }}
              render={({ field, fieldState }) => (
                <>
                {
                  
                }
                  <Menu
                    label="What Would You Like To Ship?"
                    placeholder="What Would You Like To Ship?"
                    options={categories}
                    value={null}
                    handleSelectedOption={(selectedOption) => {
                      console.log({ selectedOption });
                      // setValue("vehicle_details.vehicle_type", selectedOption);
                      // clearErrors("vehicle_details.vehicle_type");
                      // otherVehicleYearRef.current?.focus();
                    }}
                    isDisabled={false}
                    isError={fieldState?.error?.message || ""}
                  />
                </>
              )}
            />
          </div>

          <div className=" col-span-4">
            <Controller
              name={"address"}
              control={control}
              // rules={{ required: "This is required field" }}
              render={({ field, fieldState }) => (
                <>
                  <Autocomplete
                    options={{
                      componentRestrictions: {
                        country: ["fr"],
                      },
                    }}
                    onPlaceChanged={() => {
                      const place = ref1.current.getPlace();

                      field.onChange(place.formatted_address);
                      // setOrigin({
                      //   lat: place.geometry.location.lat(),
                      //   lng: place.geometry.location.lng(),
                      // });
                      // setValue("transport_car_from", place.formatted_address);
                      // clearErrors("transport_car_from");
                    }}
                    onLoad={(autocomplete) => {
                      ref1.current = autocomplete;
                    }}
                  >
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        defaultValue={""}
                        className={`mt-1 block w-full rounded-sm border ${
                          fieldState.error
                            ? "border-red-400"
                            : "border-slate-300"
                        }  bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:${
                          fieldState.error
                            ? "border-red-400"
                            : "border-[#042434]"
                        } focus:outline-none  sm:text-sm`}
                        placeholder="Enter Address"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </Autocomplete>
                  {fieldState?.error?.message}
                </>
              )}
            />
          </div>

          <div className=" col-span-4">
            <button className="rounded-full bg-[#D7D7D7] p-3 mt-1 text-sm">
              Make an appointment
            </button>
          </div>

          <div className=" col-span-12 justify-center text-center">
            <div className=" w-[50%] text-left mt-6 ml-10">
              <h1 className="text-[#005646] text-3xl font-semibold">
                Indicate the broken device and your address
              </h1>
              <h1 className="text-[#005646] text-xl font-medium mt-5">
                We will then be able to offer you the next availability near you
              </h1>
            </div>
          </div>

          <div className=" col-span-8 justify-center">
            <div className="relative bg-[#E7F9FA] text-primary p-4 pl-12 mt-4 rounded-lg shadow-sm">
              <div
                className="absolute top-0 -left-3 -translate-x-1/2 -translate-y-1/2 -rotate-12 bg-primary bg-[#1A8E96] text-white py-1 px-2 rounded shadow-md text-xs font-semibold"
                style={{ transform: "rotate(-8deg)" }}
              >
                THE +
              </div>
              <div className="font-medium mb-1 text-[#1A8E96]">
                Up to <span className=" font-extrabold">€50 per device</span>{" "}
                repaired with the{" "}
                <span className=" font-extrabold">Repair Bonus!</span>
              </div>
              <a
                href="#"
                className="text-[#1A8E96] underline decoration-[#1A8E96]"
              >
                + info
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-span-4"></div>
    </div>
  );
};

export default Step1;
