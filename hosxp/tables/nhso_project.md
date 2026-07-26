# `nhso_project`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nhso_project_code | varchar(15) | YES | UNI | NULL |  |  |
| nhso_project_name | varchar(250) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_nhso_project_code | nhso_project_code | yes | 1 |
| ix_nhso_project_name | nhso_project_name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "nhso_project_code": "ADSCOV",
    "nhso_project_name": "สิทธิ UC ผู้ป่วยในที่เข้าเกณฑ์คัดกรองโควิด 19"
  },
  {
    "nhso_project_code": "ART7AE",
    "nhso_project_name": "การขอรับค่าใช้จ่ายกรณีอุบัติเหตุ ฉุกเฉินสำหรับหน่วยบริการ Inclusive"
  },
  {
    "nhso_project_code": "ART7RF",
    "nhso_project_name": "การขอรับค่าใช้จ่ายกรณีเหตุสมควร (มาตรา 7)"
  },
  {
    "nhso_project_code": "CANCER",
    "nhso_project_name": "มะเร็งรับบริการได้ทุกที่ที่พร้อม"
  },
  {
    "nhso_project_code": "DEADCO",
    "nhso_project_name": "ค่าใช้จ่ายการแพร่กระจายเชื้อสำหรับบุคลากรที่จัดการศพผู้เสียชีวิตด้วยโรคโควิด-19"
  },
  {
    "nhso_project_code": "DMIDML",
    "nhso_project_name": "กรณีเลเซอร์จากเบาหวานขึ้นจอประสาทตา"
  },
  {
    "nhso_project_code": "DMISHD",
    "nhso_project_name": "การเบิก SHUNT ในผู้ป่วยฟอกเลือด (HD)"
  },
  {
    "nhso_project_code": "DMISOH",
    "nhso_project_name": "ผ่าตัดโรคหัวใจ"
  }
]
```
