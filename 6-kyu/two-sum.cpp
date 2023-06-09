#include <iostream>
#include <vector>

std::vector<int> twoSum(std::vector<int>& numbers, int target) {
    std::vector<int> result;
    int index = -1;

    while (!numbers.empty()) {
        index++;
        int num1 = numbers[0];
        numbers.erase(numbers.begin());

        int index2 = index + 1;
        for (int num2 : numbers) {
            if (num1 + num2 == target) {
                result = { index, index2 };
                break;
            }
            index2++;
        }

        if (!result.empty()) {
            break;
        }
    }

    return result;
}

int main() {
    std::vector<int> numbers = { 2, 7, 11, 15 };
    int target = 9;

    std::vector<int> indices = twoSum(numbers, target);
    if (!indices.empty()) {
        std::cout << "Indices: [" << indices[0] << ", " << indices[1] << "]" << std::endl;
    } else {
        std::cout << "No solution found." << std::endl;
    }

    return 0;
}
