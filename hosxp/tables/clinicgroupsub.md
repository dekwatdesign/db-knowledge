# `clinicgroupsub`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ClinicGroup_Subid | varchar(50) | YES |  | NULL |  |  |
| ClinicSub_id | varchar(50) | YES |  | NULL |  |  |
| ClinicSub_name | varchar(120) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ClinicGroup_Subid": "01",
    "ClinicSub_id": "0101",
    "ClinicSub_name": "อายุรกรรมทั่วไป"
  },
  {
    "ClinicGroup_Subid": "01",
    "ClinicSub_id": "0102",
    "ClinicSub_name": "อายุรกรรมประสาท"
  },
  {
    "ClinicGroup_Subid": "01",
    "ClinicSub_id": "0103",
    "ClinicSub_name": "อายุรกรรมโรคหัวใจ"
  },
  {
    "ClinicGroup_Subid": "02",
    "ClinicSub_id": "0201",
    "ClinicSub_name": "ศัลยกรรมทั่วไป"
  },
  {
    "ClinicGroup_Subid": "02",
    "ClinicSub_id": "0202",
    "ClinicSub_name": "ศัลยกรรมประสาท"
  },
  {
    "ClinicGroup_Subid": "02",
    "ClinicSub_id": "0203",
    "ClinicSub_name": "ศัลยกรรมหัวใจ(CVT)"
  },
  {
    "ClinicGroup_Subid": "02",
    "ClinicSub_id": "0204",
    "ClinicSub_name": "ศัลยกรรมตกแต่ง(Burn)"
  },
  {
    "ClinicGroup_Subid": "02",
    "ClinicSub_id": "0205",
    "ClinicSub_name": "ศัลยกรรมทางเดินปัสสาวะ(Urology)"
  }
]
```
