import { create } from 'zustand';
import { qa, qaLength } from '@/api/questions_and_answers';

export const qaStore = create((set) => ({
    loading: false,
    currentQuestion: qa[0],

    setCurrentQuestionIndex: (newIndex) =>
        set(() => ({
            currentQuestion: qa[newIndex]
        })),

    nextQuestion: () =>
        set((state) => ({
            currentQuestion: qa[(state.currentQuestion.id + qaLength) % qaLength],
        })),

    prevQuestion: () =>
        set((state) => ({
            currentQuestion: qa[(state.currentQuestion.id - 2 + qaLength) % qaLength],
        })),

    setLoading: (newLoading) => set({ loading: newLoading }),
}));

