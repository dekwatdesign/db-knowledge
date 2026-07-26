# `dental_report`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dental_report_id | int(11) | NO | PRI | 0 |  |  |
| dental_report_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dental_report_name | dental_report_name | yes | 1 |
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dental_report_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "dental_report_id": 1,
    "dental_report_name": "ให้การส่งเสริมป้องกันรกษา ฟื้นฟูด้านทันตกรรม ผู้ป่วยนอก สิทธิข้าราชการ/รัฐวิสาหกิจ/เบิกต้นสังกัด",
    "hos_guid": "{20248A04-E5D8-11DF-BBCF-F3CA1C2D0000}",
    "hospcode": null
  }
]
```
