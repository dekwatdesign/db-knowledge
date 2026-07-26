# `patient_adr_medication`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_adr_medication_id | int(11) | NO | PRI | 0 |  |  |
| patient_adr_id | int(11) | YES |  | NULL |  |  |
| adr_medication_type_id | int(11) | YES |  | NULL |  |  |
| medication_begin_date | date | YES |  | NULL |  |  |
| medication_end_date | date | YES |  | NULL |  |  |
| medication_icd | varchar(9) | YES |  | NULL |  |  |
| adr_medication_source_id | int(11) | YES |  | NULL |  |  |
| medication_name | varchar(150) | YES |  | NULL |  |  |
| medication_idr | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_adr_medication_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "patient_adr_medication_id": 1,
    "patient_adr_id": 10,
    "adr_medication_type_id": 1,
    "medication_begin_date": "2013-05-30",
    "medication_end_date": "2013-05-31",
    "medication_icd": "ADHD",
    "adr_medication_source_id": null,
    "medication_name": "Methylphenidate 10 mg (Ritalin)",
    "medication_idr": "ครึ่งเม็ดหลังอาหารเช้า",
    "hos_guid": null
  },
  {
    "patient_adr_medication_id": 2,
    "patient_adr_id": 10,
    "adr_medication_type_id": 2,
    "medication_begin_date": "2012-08-08",
    "medication_end_date": null,
    "medication_icd": "autism",
    "adr_medication_source_id": null,
    "medication_name": "Risperidone Solution",
    "medication_idr": "1 มิลลิกรัม เช้า ก่อนนอน",
    "hos_guid": null
  },
  {
    "patient_adr_medication_id": 3,
    "patient_adr_id": 10,
    "adr_medication_type_id": 2,
    "medication_begin_date": "2013-05-30",
    "medication_end_date": null,
    "medication_icd": "autism",
    "adr_medication_source_id": null,
    "medication_name": "Depakine Solution 200 mg/ml",
    "medication_idr": "200 มิลลิกรัม เช้า 400 มิลลิกรัม ก่อนนอน",
    "hos_guid": null
  },
  {
    "patient_adr_medication_id": 4,
    "patient_adr_id": 14,
    "adr_medication_type_id": 1,
    "medication_begin_date": "1970-07-11",
    "medication_end_date": "1970-07-14",
    "medication_icd": "ADHD",
    "adr_medication_source_id": null,
    "medication_name": "Methylphenidate 10 mg (RITALIN)",
    "medication_idr": "ครึ่งเม็ด หลังอาหารเช้า",
    "hos_guid": null
  },
  {
    "patient_adr_medication_id": 5,
    "patient_adr_id": 14,
    "adr_medication_type_id": 2,
    "medication_begin_date": "2013-04-01",
    "medication_end_date": null,
    "medication_icd": "Autism",
    "adr_medication_source_id": null,
    "medication_name": "Risperidone Solution",
    "medication_idr": "0.4 มิลลิกรัม ก่อนนอน",
    "hos_guid": null
  },
  {
    "patient_adr_medication_id": 7,
    "patient_adr_id": 27,
    "adr_medication_type_id": 1,
    "medication_begin_date": "2014-02-24",
    "medication_end_date": "2014-03-16",
    "medication_icd": "autism",
    "adr_medication_source_id": null,
    "medication_name": "risperdal solution",
    "medication_idr": "0.2 mg  hs",
    "hos_guid": null
  },
  {
    "patient_adr_medication_id": 8,
    "patient_adr_id": 62,
    "adr_medication_type_id": 1,
    "medication_begin_date": "2024-03-14",
    "medication_end_date": "2024-04-18",
    "medication_icd": null,
    "adr_medication_source_id": null,
    "medication_name": "quetiapine 200 mg",
    "medication_idr": "1/4 เม็ด ก่อนนอน",
    "hos_guid": null
  }
]
```
