import Container from "./Container";
import classes from "./SkeletonWrapper.module.css";

function SkeletonWrapper() {
  return (
    <Container>
      <div className={classes["skeleton-wrapper"]}>
        <div className={classes["lds-ring"]}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Container>
  );
}

export default SkeletonWrapper;
