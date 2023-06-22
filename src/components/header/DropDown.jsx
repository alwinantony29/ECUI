import { Menu } from "@headlessui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function Dropdown(props) {
  return (
    <div className="flex">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button>
              <div className="flex items-center">
                {props.val[0]}
                {open ? <BsChevronUp /> : <BsChevronDown />}
              </div>
            </Menu.Button>
            {open && (
              <Menu.Items static>
                <div className="flex flex-col">
                  {props.val.map((item, index) => (
                    <Menu.Item key={index}>
                      <a>{item}</a>
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            )}
          </>
        )}
      </Menu>
    </div>
  );
}

export default Dropdown;
