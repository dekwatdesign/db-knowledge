# `lab_head_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_order_number | int(11) | NO | PRI | 0 |  |  |
| item_list_text | text | YES |  | NULL |  |  |
| doctor_confirm_text | text | YES |  | NULL |  |  |
| rlu_status | varchar(10) | YES |  | NULL |  |  |
| rlu_warning | varchar(500) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | lab_order_number | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "lab_order_number": 19786,
    "item_list_text": "Urine examination",
    "doctor_confirm_text": null,
    "rlu_status": null,
    "rlu_warning": null
  },
  {
    "lab_order_number": 19785,
    "item_list_text": "CBC (+diff.+RBC morphology+platelet count) by automation,DIFFERENTIAL ?,RBC MORPHOLOGY ?",
    "doctor_confirm_text": null,
    "rlu_status": null,
    "rlu_warning": null
  },
  {
    "lab_order_number": 19784,
    "item_list_text": "Albumin,Alkaline phosphatase,ALT (SGPT),AST (SGOT),Bilirubin Direct,Bilirubin Total,BUN (Blood Urea Nitrogen),Creatinine,Fasting Blood Sugar (FBS),HDL Choleserol,LDL Choleserol,Total Choleserol,Total protien,Triglyceride,Uric acid",
    "doctor_confirm_text": null,
    "rlu_status": null,
    "rlu_warning": null
  },
  {
    "lab_order_number": 22096,
    "item_list_text": "Prolactin",
    "doctor_confirm_text": null,
    "rlu_status": null,
    "rlu_warning": null
  },
  {
    "lab_order_number": 14028,
    "item_list_text": "CBC,DIFFERENTIAL",
    "doctor_confirm_text": null,
    "rlu_status": null,
    "rlu_warning": null
  },
  {
    "lab_order_number": 14027,
    "item_list_text": "Albumin,Alkaline phosphatase,ALT (SGPT),AST (SGOT),Bilirubin Direct,Bilirubin Total,BUN (Blood Urea Nitrogen),Creatinine,Fasting Blood Sugar (FBS),HDL Choleserol,LDL Choleserol,Total Choleserol,Total protien,Triglyceride,Uric acid",
    "doctor_confirm_text": null,
    "rlu_status": null,
    "rlu_warning": null
  },
  {
    "lab_order_number": 19975,
    "item_list_text": "BUN (Blood Urea Nitrogen),Creatinine",
    "doctor_confirm_text": null,
    "rlu_status": null,
    "rlu_warning": null
  },
  {
    "lab_order_number": 19974,
    "item_list_text": "Lithium  (Clotted Blood)",
    "doctor_confirm_text": null,
    "rlu_status": null,
    "rlu_warning": null
  }
]
```
