# `icd11_chapter`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| chapter_code | varchar(3) | NO | PRI | NULL |  |  |
| chapter_name_eng | varchar(250) | YES |  | NULL |  |  |
| chapter_name_thai | varchar(250) | YES |  | NULL |  |  |
| entity_id | bigint(20) | YES |  | NULL |  |  |
| ordinal | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | chapter_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "chapter_code": "10",
    "chapter_name_eng": "Diseases of the ear or mastoid process",
    "chapter_name_thai": "โรคของหูหรือส่วนกระดูกมาสทอยด์",
    "entity_id": 1218729044,
    "ordinal": 10
  },
  {
    "chapter_code": "24",
    "chapter_name_eng": "Factors influencing health status or contact with health services",
    "chapter_name_thai": "ปัจจัยที่มีอิทธิพลต่อสถานะสุขภาพหรือการติดต่อรับบริการทางสุขภาพ",
    "entity_id": 1249056269,
    "ordinal": 24
  },
  {
    "chapter_code": "13",
    "chapter_name_eng": "Diseases of the digestive system",
    "chapter_name_thai": "โรคของระบบย่อยอาหาร",
    "entity_id": 1256772020,
    "ordinal": 13
  },
  {
    "chapter_code": "08",
    "chapter_name_eng": "Diseases of the nervous system",
    "chapter_name_thai": "โรคของระบบประสาท",
    "entity_id": 1296093776,
    "ordinal": 8
  },
  {
    "chapter_code": "19",
    "chapter_name_eng": "Certain conditions originating in the perinatal period",
    "chapter_name_thai": "ภาวะบางอย่างที่มีจุดเริ่มต้นในระยะรอบคลอด",
    "entity_id": 1306203631,
    "ordinal": 19
  },
  {
    "chapter_code": "01",
    "chapter_name_eng": "Certain infectious or parasitic diseases",
    "chapter_name_thai": "โรคติดเชื้อหรือโรคจากพยาธิบางชนิด",
    "entity_id": 1435254666,
    "ordinal": 1
  },
  {
    "chapter_code": "15",
    "chapter_name_eng": "Diseases of the musculoskeletal system or connective tissue",
    "chapter_name_thai": "โรคของระบบกล้ามเนื้อและโครงร่างหรือเนื้อเยื่อเกี่ยวพัน",
    "entity_id": 1473673350,
    "ordinal": 15
  },
  {
    "chapter_code": "25",
    "chapter_name_eng": "Codes for special purposes",
    "chapter_name_thai": "รหัสเพื่อวัตถุประสงค์พิเศษ",
    "entity_id": 1596590595,
    "ordinal": 25
  }
]
```
