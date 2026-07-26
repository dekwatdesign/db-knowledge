# `infowork_type_score_sub`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| TYPE_SCORE_SUB_ID | int | NO | PRI | NULL | auto_increment |  |
| TYPE_SCORE_ID | varchar(600) | YES |  | NULL |  |  |
| TYPE_SCORE_SUB_TOTAL | varchar(255) | YES |  | NULL |  |  |
| TYPE_SCORE_SUB_NAME | varchar(255) | YES |  | NULL |  |  |
| ACTIVE | enum('True','Fales') | YES |  | True |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | TYPE_SCORE_SUB_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "TYPE_SCORE_SUB_ID": 39,
    "TYPE_SCORE_ID": "3",
    "TYPE_SCORE_SUB_TOTAL": "0",
    "TYPE_SCORE_SUB_NAME": "ไม่แสดงสมรรถนะด้านนี้อย่างชัดเจน",
    "ACTIVE": "True",
    "updated_at": "2020-09-28 14:34:10",
    "created_at": "2020-09-28 14:34:10"
  },
  {
    "TYPE_SCORE_SUB_ID": 40,
    "TYPE_SCORE_ID": "3",
    "TYPE_SCORE_SUB_TOTAL": "1",
    "TYPE_SCORE_SUB_NAME": "แสดงความสนใจและติดตามความรู้ใหม่ ๆ ในสาขาอาชีพของตนหรือที่เกี่ยวข้อง",
    "ACTIVE": "True",
    "updated_at": "2020-09-28 14:34:10",
    "created_at": "2020-09-28 14:34:10"
  },
  {
    "TYPE_SCORE_SUB_ID": 41,
    "TYPE_SCORE_ID": "3",
    "TYPE_SCORE_SUB_TOTAL": "2",
    "TYPE_SCORE_SUB_NAME": "แสดงสมรรถนะตามที่กำหนดไว้ในระดับที่ 1 และมีความรู้ในวิชาการ และเทคโนโลยีใหม่ ๆ ในสาขา อาชีพของตน",
    "ACTIVE": "True",
    "updated_at": "2020-09-28 14:34:10",
    "created_at": "2020-09-28 14:34:10"
  },
  {
    "TYPE_SCORE_SUB_ID": 42,
    "TYPE_SCORE_ID": "3",
    "TYPE_SCORE_SUB_TOTAL": "3",
    "TYPE_SCORE_SUB_NAME": "แสดงสมรรถนะตามที่กำหนดไว้ในระดับที่ 2 และสามารถนำความรู้ วิทยาการ หรือเทคโนโลยี ใหม่ ๆ มาปรับใช้กับการปฏิบัติหน้าที่ราชการ",
    "ACTIVE": "True",
    "updated_at": "2020-09-28 14:34:10",
    "created_at": "2020-09-28 14:34:10"
  },
  {
    "TYPE_SCORE_SUB_ID": 43,
    "TYPE_SCORE_ID": "3",
    "TYPE_SCORE_SUB_TOTAL": "4",
    "TYPE_SCORE_SUB_NAME": "แสดงสมรรถนะตามที่กำหนดไว้ในระดับที่ 3 และศึกษา พัฒนาตนเองให้มีความรู้ และความ เชี่ยวชาญในงานมากขึ้น ทั้งในเชิงลึก และเชิงกว้างอย่างต่อเนื่อง",
    "ACTIVE": "True",
    "updated_at": "2020-09-28 14:34:10",
    "created_at": "2020-09-28 14:34:10"
  },
  {
    "TYPE_SCORE_SUB_ID": 44,
    "TYPE_SCORE_ID": "3",
    "TYPE_SCORE_SUB_TOTAL": "5",
    "TYPE_SCORE_SUB_NAME": "แสดงสมรรถนะตามที่กำหนดไว้ในระดับที่ 4 และสนับสนุนการทำงานของคนในส่วนราชการที่เน้น ความเชี่ยวชาญในวิทยาการด้านต่าง ๆ",
    "ACTIVE": "True",
    "updated_at": "2020-09-28 14:34:10",
    "created_at": "2020-09-28 14:34:10"
  },
  {
    "TYPE_SCORE_SUB_ID": 45,
    "TYPE_SCORE_ID": "4",
    "TYPE_SCORE_SUB_TOTAL": "0",
    "TYPE_SCORE_SUB_NAME": "ไม่แสดงสมรรถนะด้านนี้อย่างชัดเจน",
    "ACTIVE": "True",
    "updated_at": "2020-09-28 14:35:39",
    "created_at": "2020-09-28 14:35:39"
  },
  {
    "TYPE_SCORE_SUB_ID": 46,
    "TYPE_SCORE_ID": "4",
    "TYPE_SCORE_SUB_TOTAL": "1",
    "TYPE_SCORE_SUB_NAME": "มีความสุจริต",
    "ACTIVE": "True",
    "updated_at": "2020-09-28 14:35:39",
    "created_at": "2020-09-28 14:35:39"
  }
]
```
