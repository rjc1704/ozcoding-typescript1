type Circle = {
  type: "circle"; // 판별자 (discriminator)
  radius: number;
};

type Rectangle = {
  type: "rectangle"; // 판별자 (discriminator)
  width: number;
  height: number;
};

type Triangle = {
  type: "triangle"; // 판별자 (discriminator)
  base: number;
  height: number;
};

// 판별 유니온 타입 정의
type Shape = Circle | Rectangle | Triangle;

// 타입 좁히기를 통한 안전한 처리
function getArea(shape: Shape): number {
  switch (shape.type) {
    case "circle":
      // 여기서 shape는 Circle 타입으로 좁혀짐
      return Math.PI * shape.radius ** 2;

    case "rectangle":
      // 여기서 shape는 Rectangle 타입으로 좁혀짐
      return shape.width * shape.height;

    case "triangle":
      // 여기서 shape는 Triangle 타입으로 좁혀짐
      return (shape.base * shape.height) / 2;

    default:
      // 모든 케이스를 다뤘으므로 여기는 실행되지 않음
      const exhaustiveCheck: never = shape;
      throw new Error(`Unhandled shape: ${exhaustiveCheck}`);
  }
}

// 사용자 이벤트 타입에 따른 로깅처리
type UserLoginEvent = {
  type: "USER_LOGIN";
  userId: string;
  timestamp: Date;
  ip: string;
};

type UserLogoutEvent = {
  type: "USER_LOGOUT";
  userId: string;
  timestamp: Date;
  sessionDuration: number;
};

type ProductPurchaseEvent = {
  type: "PRODUCT_PURCHASE";
  userId: string;
  productId: string;
  amount: number;
  timestamp: Date;
};

type AnalyticsEvent = UserLoginEvent | UserLogoutEvent | ProductPurchaseEvent;

// 이벤트 타입에 따른 분석 로직
function analyzeEvent(event: AnalyticsEvent): void {
  switch (event.type) {
    case "USER_LOGIN":
      console.log(`사용자 로그인: ${event.userId} (IP: ${event.ip})`);
      // 로그인 통계 업데이트
      break;

    case "USER_LOGOUT":
      console.log(
        `사용자 로그아웃: ${event.userId} (세션 시간: ${event.sessionDuration}분)`,
      );
      // 세션 통계 업데이트
      break;

    case "PRODUCT_PURCHASE":
      console.log(`상품 구매: ${event.productId} - ${event.amount}원`);
      // 매출 통계 업데이트
      break;

    default:
      const exhaustiveCheck: never = event;
      throw new Error(`Unhandled event type: ${exhaustiveCheck}`);
  }
}
