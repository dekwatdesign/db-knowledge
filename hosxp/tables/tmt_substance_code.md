# `tmt_substance_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| substance_code | varchar(6) | NO | PRI |  |  |  |
| substance_name | varchar(200) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | substance_name | no | 1 |
| PRIMARY | substance_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "substance_code": "842343",
    "substance_name": "90Y-ibritumomab tiuxetan"
  },
  {
    "substance_code": "882221",
    "substance_name": "A/new caledonia/20/99 (H1N1) like strain derived used IVR-116"
  },
  {
    "substance_code": "882245",
    "substance_name": "A/wellington/1/2004(IVR-139)"
  },
  {
    "substance_code": "355347",
    "substance_name": "abacavir"
  },
  {
    "substance_code": "719114",
    "substance_name": "abatacept"
  },
  {
    "substance_code": "223137",
    "substance_name": "abciximab"
  },
  {
    "substance_code": "116753",
    "substance_name": "abemaciclib"
  },
  {
    "substance_code": "683577",
    "substance_name": "abiraterone acetate"
  }
]
```
