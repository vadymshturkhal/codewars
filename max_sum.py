"""
    5 kyu
    https://www.codewars.com/kata/583d171f28a0c04b7c00009c
"""


def return_biggest_sum(numbers, ranges):
    begins = {}
    ends = {}
    sums_ = {}

    ranges.sort()

    get_name = generate_name()
    for begin, end in ranges:
        if begins.get(begin) is None:
            begins[begin] = []

        if ends.get(end) is None:
            ends[end] = []

        slice_name = next(get_name)

        begins[begin].append(slice_name)
        ends[end].append(slice_name)

        sums_[slice_name] = 0

    prev = 0
    total_sum = 0
    for i in range(len(numbers)):
        total_sum += numbers[i]

        if begins.get(i) is not None:
            for beg in begins[i]:
                sums_[beg] = prev
 
        if ends.get(i) is not None:
            for end in ends[i]:
                sums_[end] = total_sum - sums_[end]
        prev = total_sum

    return max(sums_.values())


def generate_name():
    name = ''
    counter = 0
    while True:
        yield name + str(counter)
        counter += 1

if __name__ == '__main__':
    A = [1, -2, 3, 4, -5, -4, 3, 2, 1]
    ranges = [(1, 3), (0, 4), (6, 8)]

    x = return_biggest_sum(A, ranges)
    print(x)
    result = 6
