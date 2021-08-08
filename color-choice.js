// 6 kyu
// https://www.codewars.com/kata/55be10de92aad5ef28000023

function checkchoose(m, n, candidate) {
  if (candidate === 0 || candidate > n) {
    return -1;
  };

  if (m == n) {
    return 1;
  }

  if (!candidate) {
    candidate = Math.ceil(n / 2);
  };

  const epsilon = 0.00001;

  const resOfCandidate = comb(n, candidate);

  if (Math.abs(m - resOfCandidate) <= epsilon) {
    return candidate < n - candidate ? candidate : n - candidate;
  } else {
    return checkchoose(m, n, candidate - 1);
  }
};

function comb(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}

function factorial(n) {
  const factorials = [1];

  for (let i = 1; i <= n; i++) {
    factorials.push(i * factorials[i - 1]);
  };

  return factorials[n];
};
