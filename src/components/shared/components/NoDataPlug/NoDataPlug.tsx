import { Button, Result } from "antd"
import { Link } from "react-router-dom"

const NoDataPlug: React.FC = () => (
  <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={
      <Link to="/login">
        <Button type="primary">Return to Sign In</Button>
      </Link>
    }
  />
)

export default NoDataPlug
