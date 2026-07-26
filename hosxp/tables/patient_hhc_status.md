# `patient_hhc_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_hhc_status_id | int(11) | NO | PRI | 0 |  |  |
| patient_hhc_status_name | varchar(80) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | patient_hhc_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "patient_hhc_status_id": 0,
    "patient_hhc_status_name": "จำหน่ายแล้ว"
  },
  {
    "patient_hhc_status_id": 1,
    "patient_hhc_status_name": "รอวางแผนเยี่ยม"
  },
  {
    "patient_hhc_status_id": 2,
    "patient_hhc_status_name": "มีแผนเยี่ยมแล้ว"
  },
  {
    "patient_hhc_status_id": 3,
    "patient_hhc_status_name": "รอ รพ.สต.รับข้อมูล"
  },
  {
    "patient_hhc_status_id": 4,
    "patient_hhc_status_name": "รพ.สต. รับข้อมูลแล้ว"
  },
  {
    "patient_hhc_status_id": 5,
    "patient_hhc_status_name": "ยกเลิกการส่งรพ.สต."
  },
  {
    "patient_hhc_status_id": 6,
    "patient_hhc_status_name": "รพ.สต. ปฏิเสธข้อมูล"
  }
]
```
