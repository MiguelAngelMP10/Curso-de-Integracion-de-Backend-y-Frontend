/* eslint-disable import/no-extraneous-dependencies */
import { configure } from "enzyme";

// eslint-disable-next-line import/no-unresolved
import Adapter from "enzyne-adapter-react-16";

configure({ adapter: new Adapter() });
