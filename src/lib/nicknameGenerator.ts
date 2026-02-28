const romanticSuffixes = ['ya', 'ish', 'vi', 'oo', 'ia', 'an'];

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function blendNames(name1: string, name2: string): string[] {
  const n1 = name1.toLowerCase().trim();
  const n2 = name2.toLowerCase().trim();
  const results: string[] = [];

  // Method 1: First half of name1 + last half of name2
  const half1 = n1.slice(0, Math.ceil(n1.length / 2));
  const half2 = n2.slice(Math.floor(n2.length / 2));
  results.push(capitalize(half1 + half2));

  // Method 2: First 2 letters of both + romantic suffix
  const prefix = n1.slice(0, 2) + n2.slice(0, 2);
  const suffix = romanticSuffixes[Math.floor(Math.random() * romanticSuffixes.length)];
  results.push(capitalize(prefix + suffix));

  // Method 3: Blend overlapping letters
  let blended = '';
  const overlap = n1.charAt(n1.length - 1) === n2.charAt(0);
  if (overlap) {
    blended = n1 + n2.slice(1);
  } else {
    blended = n1.slice(0, Math.ceil(n1.length * 0.6)) + n2.slice(Math.floor(n2.length * 0.4));
  }
  results.push(capitalize(blended));

  return results;
}

export function generateNickname(name1: string, name2: string): string {
  const options = blendNames(name1, name2);
  return options[Math.floor(Math.random() * options.length)];
}
