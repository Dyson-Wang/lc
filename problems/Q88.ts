/**
 Do not return anything, modify nums1 in-place instead.
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let j = n - 1,
    p = m + n - 1,
    element = 0
  for (let i = m - 1; i >= 0; i--) {
    if (j < 0) break
    element = nums1[i]
    if (element >= nums2[j]) {
      nums1[p] = element
    } else {
      nums1[p] = nums2[j]
      i++
      j--
    }
    p--
  }
  if (j >= 0) {
    for (; j >= 0; j--) {
      element = nums2[j]
      nums1[p] = element
      p--
    }
  }
}
