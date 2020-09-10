// TODO: delete this saga example
import { all, takeLatest } from 'redux-saga/effects';

export function* test(action: any) {}

export const testSagas = all([takeLatest('TEST', test)]);
