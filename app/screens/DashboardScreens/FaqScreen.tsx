import {
    Collapse,
    CollapseBody,
    CollapseHeader,
} from 'accordion-collapse-react-native';
import React from 'react';
import { Text, View } from 'react-native';

const FaqScreen = () => {
  const FaqData = [
    {
      question: 'What is hangout ?',
      answer:
        'Our quantitative research company has been lucky to work with organizations from Fortune 500 enterprises to the top consultancies',
    },
    {
      question: 'What we do ?',
      answer:
        'Our quantitative research company has been lucky to work with organizations from Fortune 500 enterprises to the top consultancies',
    },
    {
      question: 'Do we have anything else ?',
      answer:
        'Our quantitative research company has been lucky to work with organizations from Fortune 500 enterprises to the top consultancies',
    },
    {
      question: 'Do we have anything else ?',
      answer:
        'Our quantitative research company has been lucky to work with organizations from Fortune 500 enterprises to the top consultancies',
    },
    {
      question: 'Do we have anything else ?',
      answer:
        'Our quantitative research company has been lucky to work with organizations from Fortune 500 enterprises to the top consultancies',
    },
    {
      question: 'Do we have anything else ?',
      answer:
        'Our quantitative research company has been lucky to work with organizations from Fortune 500 enterprises to the top consultancies',
    },
  ];

  return (
    <View className="bg-slate-200 h-full px-4 py-6">
      <View>
        {FaqData.map((item, index) => (
          <Collapse
            key={index}
            className="bg-white w-full min-h-[56px] justify-center p-4 rounded-lg mb-4">
            <CollapseHeader>
              <View>
                <Text className="text-black font-semibold">
                  {item.question}
                </Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <Text>{item.answer}</Text>
            </CollapseBody>
          </Collapse>
        ))}
      </View>
    </View>
  );
};

export default FaqScreen;
