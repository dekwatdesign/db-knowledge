# `nhso_inscl_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inscl_code | char(3) | NO | PRI |  |  |  |
| inscl_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_inscl_name | inscl_name | yes | 1 |
| PRIMARY | inscl_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "inscl_code": "A8",
    "inscl_name": "กองทุนทดแทน"
  },
  {
    "inscl_code": "OFC",
    "inscl_name": "ข้าราชการ"
  },
  {
    "inscl_code": "PVT",
    "inscl_name": "ครูเอกชน"
  },
  {
    "inscl_code": "CSH",
    "inscl_name": "ชำระเงิน"
  },
  {
    "inscl_code": "NRD",
    "inscl_name": "ต่างด้าว"
  },
  {
    "inscl_code": "PTY",
    "inscl_name": "เบิกจ่ายตรง พัทยา"
  },
  {
    "inscl_code": "A2",
    "inscl_name": "เบิกต้นสังกัด"
  },
  {
    "inscl_code": "SSS",
    "inscl_name": "ประกันสังคม"
  }
]
```
