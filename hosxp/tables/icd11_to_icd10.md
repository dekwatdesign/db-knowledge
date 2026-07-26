# `icd11_to_icd10`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icd11_code | varchar(10) | NO | PRI | NULL |  |  |
| icd10_code | varchar(7) | NO | PRI | NULL |  |  |
| relation | varchar(15) | YES |  | NULL |  |  |
| confidence | decimal(10,0) | YES |  | NULL |  |  |
| source | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_icd10 | icd10_code | no | 1 |
| PRIMARY | icd10_code | yes | 1 |
| PRIMARY | icd11_code | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "icd11_code": "1A00",
    "icd10_code": "A009",
    "relation": "equivalent",
    "confidence": "1",
    "source": "WHO_official"
  },
  {
    "icd11_code": "1A01",
    "icd10_code": "A04",
    "relation": "equivalent",
    "confidence": "1",
    "source": "WHO_official"
  },
  {
    "icd11_code": "1A02",
    "icd10_code": "A039",
    "relation": "equivalent",
    "confidence": "1",
    "source": "WHO_official"
  },
  {
    "icd11_code": "1A03",
    "icd10_code": "A04",
    "relation": "equivalent",
    "confidence": "1",
    "source": "WHO_official"
  },
  {
    "icd11_code": "1A03.0",
    "icd10_code": "A040",
    "relation": "equivalent",
    "confidence": "1",
    "source": "WHO_official"
  },
  {
    "icd11_code": "1A03.1",
    "icd10_code": "A041",
    "relation": "equivalent",
    "confidence": "1",
    "source": "WHO_official"
  },
  {
    "icd11_code": "1A03.2",
    "icd10_code": "A042",
    "relation": "equivalent",
    "confidence": "1",
    "source": "WHO_official"
  },
  {
    "icd11_code": "1A03.3",
    "icd10_code": "A043",
    "relation": "equivalent",
    "confidence": "1",
    "source": "WHO_official"
  }
]
```
