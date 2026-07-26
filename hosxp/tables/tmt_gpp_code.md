# `tmt_gpp_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| gpp_code | varchar(15) | NO | PRI |  |  |  |
| gpp_name | varchar(250) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_gpp_name | gpp_name | no | 1 |
| PRIMARY | gpp_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "gpp_code": "1197098",
    "gpp_name": "abacavir 20 mg/1 mL oral solution, 1 x 240 mL bottle, 1 box (GPP)"
  },
  {
    "gpp_code": "1197079",
    "gpp_name": "abacavir 20 mg/1 mL oral solution, 240 mL bottle (GPP)"
  },
  {
    "gpp_code": "1047650",
    "gpp_name": "abacavir 300 mg film-coated tablet, 10 tablet, 1 blister (GPP)"
  },
  {
    "gpp_code": "1045658",
    "gpp_name": "abacavir 300 mg film-coated tablet, 10 tablet, blister (GPP)"
  },
  {
    "gpp_code": "1045670",
    "gpp_name": "abacavir 300 mg film-coated tablet, 6 blister, 1 box (GPP)"
  },
  {
    "gpp_code": "1333455",
    "gpp_name": "abacavir 600 mg + dolutegravir 50 mg + lamivudine 300 mg film-coated tablet, 30 tablet (1 x 30 tablet bottle), 1 box (GPP)"
  },
  {
    "gpp_code": "1333438",
    "gpp_name": "abacavir 600 mg + dolutegravir 50 mg + lamivudine 300 mg film-coated tablet, 30 tablet bottle (GPP)"
  },
  {
    "gpp_code": "1060947",
    "gpp_name": "abacavir 600 mg + lamivudine 300 mg film-coated tablet, 10 tablet, 1 blister (GPP)"
  }
]
```
