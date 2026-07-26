# `hsk_assessment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| aid | int(7) | NO | PRI | 0 |  |  |
| assessment_code | varchar(255) | YES |  | NULL |  |  |
| assessment_name | varchar(255) | YES |  | NULL |  |  |
| assessment_status | varchar(255) | YES |  | NULL |  |  |
| assessment_page | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | aid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "aid": 1,
    "assessment_code": "AS01",
    "assessment_name": "แบบฟอร์มปฐมนิเทศผู้ป่วย ญาติ กรณีรับไว้รักษาในโรงพยาบาล",
    "assessment_status": "Y",
    "assessment_page": "Ass_01.php"
  },
  {
    "aid": 2,
    "assessment_code": "AS02",
    "assessment_name": "แบบฟอร์มเกณฑ์การพิจารณารับผู้ป่วยจิตเวชไว้รักษาในโรงพยาบาล",
    "assessment_status": "Y",
    "assessment_page": "Ass_02.php"
  },
  {
    "aid": 3,
    "assessment_code": "AS03",
    "assessment_name": "แบบคัดกรองโรคติดเชื้อสำคัญและอาการที่ต้องเฝ้าระวัง",
    "assessment_status": "Y",
    "assessment_page": "Ass_03.php"
  },
  {
    "aid": 8,
    "assessment_code": "AS05",
    "assessment_name": "แบบประเมินความสามารถโดยรวม (Global Assessment of Functioning Scale: GAF)",
    "assessment_status": "Y",
    "assessment_page": "Ass_05.php"
  },
  {
    "aid": 7,
    "assessment_code": "AS04",
    "assessment_name": "แบบประเมินสภาพผู้ป่วยแรกรับ (พยาบาล)",
    "assessment_status": "Y",
    "assessment_page": "Ass_04.php"
  }
]
```
