function bigolfunc(nums) {
  const P = (amount, result = 1) => {
    while (amount > 1) result *= amount--;
    return result;
  }

  const result = [];
  const [...obj] = nums

  console.log(obj)

  return result;
}

console.log(bigolfunc([1, 2, 3]))

/*
def permute(nums)
  head, *tail = nums
  return [[head]] if tail.empty?

  [].tap do |memo|
    permute(tail).each do |tail_permutation|
      0.upto(tail.size) do |i|
        permutation = tail_permutation.dup
        permutation.insert(i, head)
        memo << permutation
      end
    end
  end
end
permute([1, 2, 3])
*/