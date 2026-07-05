import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

import { CareerAnalysis } from "@/types/analysis";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },

  section: {
    marginBottom: 18,
  },

  heading: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
  },

  text: {
    marginBottom: 4,
  },
});

interface Props {
  userName: string;
  analysis: CareerAnalysis;
}

export default function CareerReport({
  userName,
  analysis,
}: Props) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

        <Text style={styles.title}>
          CareerCompass AI Report
        </Text>

        <View style={styles.section}>
          <Text style={styles.text}>
            Candidate: {userName}
          </Text>

          <Text style={styles.text}>
            Generated: {new Date().toLocaleDateString()}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>
            ATS Score
          </Text>

          <Text>
            {analysis.atsScore}%
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>
            Career Recommendation
          </Text>

          <Text>
            Role: {analysis.careerRecommendation.role}
          </Text>

          <Text>
            Confidence: {analysis.careerRecommendation.confidence}%
          </Text>

          <Text>
            {analysis.careerRecommendation.reason}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>
            Missing Skills
          </Text>

          {analysis.missingSkills.map((skill) => (
            <Text key={skill}>
              • {skill}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>
            Learning Roadmap
          </Text>

          {analysis.roadmap.map((step, index) => (
            <Text key={index}>
              {index + 1}. {step}
            </Text>
          ))}
        </View>

      </Page>
    </Document>
  );
}