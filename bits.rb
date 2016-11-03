def ones n
  count = 0
  until n == 0
    n = n & n-1
    count += 1
  end
  count
end

# O(n)
def parity n
  ones(n) % 2
end

# divide into parts, cache:
# divide into halves, xor: 0(log n)

def swap n, i, j
  bitmask = (1 << i) | (1 << j)

  n[i] != n[j] ? n ^ bitmask : n
end

def closest_with_equal_weight n
  # least significant zero
  bitmask = ~n & (n+1)

  if bitmask == 1
    # least significant one
    bitmask = n & ~(n-1)
  end

  (n ^ bitmask) ^ (bitmask >> 1)
end
