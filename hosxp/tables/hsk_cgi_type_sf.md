# `hsk_cgi_type_sf`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cgi_id | int(1) | NO | PRI | 0 |  |  |
| cgi_name | varchar(255) | YES |  | NULL |  |  |
| cgi_list | varchar(255) | YES |  | NULL |  |  |
| cgi_group | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | cgi_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "cgi_id": 1,
    "cgi_name": "Symptom Frequency (ความถี่ของอาการ)",
    "cgi_list": "1.ไม่พบอาการของโรค",
    "cgi_group": "1"
  },
  {
    "cgi_id": 2,
    "cgi_name": "Symptom Frequency (ความถี่ของอาการ)",
    "cgi_list": "2.แทบไม่พบอาการ",
    "cgi_group": "2"
  },
  {
    "cgi_id": 3,
    "cgi_name": "Symptom Frequency (ความถี่ของอาการ)",
    "cgi_list": "3.ความถี่น้อย",
    "cgi_group": "2,3"
  },
  {
    "cgi_id": 4,
    "cgi_name": "Symptom Frequency (ความถี่ของอาการ)",
    "cgi_list": "4.มีอาการบ่อยครั้ง",
    "cgi_group": "4"
  },
  {
    "cgi_id": 5,
    "cgi_name": "Symptom Frequency (ความถี่ของอาการ)",
    "cgi_list": "5.มีอาการบ่อยหรือเกือบตลอดเวลา",
    "cgi_group": "4,5"
  },
  {
    "cgi_id": 6,
    "cgi_name": "Symptom Frequency (ความถี่ของอาการ)",
    "cgi_list": "6.มีอาการตลอด/เกือบตลอดเวลา",
    "cgi_group": "6"
  },
  {
    "cgi_id": 7,
    "cgi_name": "Symptom Frequency (ความถี่ของอาการ)",
    "cgi_list": "7.มีอาการตลอด/เกือบตลอดเวลา",
    "cgi_group": "6,7"
  }
]
```
