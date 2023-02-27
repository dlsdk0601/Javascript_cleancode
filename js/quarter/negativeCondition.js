/*
 * if 조건안에다가 !를 붙여서 부정 조건문을 추가하는걸 지양하자
 * ex NaN => Not a Number 의 줄인말인데, 이미 부정적인 뜻이 있다.
 * 조건문에 부정적인 느낌이면 조건이 굉장히 헷갈린다.
 * 조건이 헷갈리면 테스트를 여러번하게 된다. 이는 불필요한 테스트임 */

const isCondition = true;
const isNotCondition = false;

if (!isCondition) {
  console.log("거짓인 경우에 실행");
}

if (isNotCondition) {
  console.log("거짓인 경우에 실행");
}

/*
 * if ~ else 문은 condition 을 기준으로 if 먼저 쓰게 돼있다.
 * 이는 이미 머릿속에서 condition 이 true 라고 생각하게 되기에 부정 조건을 지양하는게 낫다.
 * Early Return , validation 의 경우에는 부정 조건문을 if 안에 쓰는게 낫다.*/
