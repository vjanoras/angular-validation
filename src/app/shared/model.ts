import { Validators } from '@angular/forms';

export interface FieldRule {
  key: string;
  conditions: Condition[];

}

export interface Condition {
  type: string;
  value: string;
  message: string;
}