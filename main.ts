export type AwsIamRolePolicy = {
  PolicyDocument: PolicyDocument;
};

type PolicyDocument = {
  Statement: StatementItem[];
};

type StatementItem = {
  Resource: string;
};

export function verifyPolicy(policy: AwsIamRolePolicy) {
  if (
    policy.PolicyDocument &&
    policy.PolicyDocument.Statement &&
    policy.PolicyDocument.Statement.length > 0
  ) {
    return !policy.PolicyDocument.Statement.some((item: StatementItem) => {
      if (item.Resource) {
        return item.Resource == "*";
      } else {
        throw new TypeError("wrong syntax");
      }
    });
  } else {
    console.log(policy.PolicyDocument.Statement.length);
    throw "wrong syntax";
  }
}
