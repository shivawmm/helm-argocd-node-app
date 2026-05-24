# 🚀  Helm + ArgoCD GitOps Platform

## 📌 Overview

This project demonstrates a complete GitOps CI/CD platform using:

* Kubernetes
* Minikube
* Helm
* ArgoCD
* GitHub Actions
* DockerHub
* Node.js
* Express.js
* Ingress NGINX

The platform follows modern GitOps principles where:

* Git acts as the single source of truth
* ArgoCD continuously reconciles cluster state
* GitHub Actions automates image builds and GitOps updates
* Helm templates Kubernetes manifests dynamically
* Kubernetes performs rolling deployments automatically

---

# 🏗️ Architecture

```text
Developer
   ↓
Git Push
   ↓
GitHub Actions
   ↓
Docker Image Build
   ↓
DockerHub Push
   ↓
GitOps Repository Update
   ↓
ArgoCD Auto Sync
   ↓
Helm Chart Rendering
   ↓
Kubernetes Rolling Update
   ↓
Ingress
   ↓
Browser
```

---

# 🧰 Tech Stack

| Tool           | Purpose                    |
| -------------- | -------------------------- |
| Kubernetes     | Container orchestration    |
| Minikube       | Local Kubernetes cluster   |
| ArgoCD         | GitOps platform            |
| Helm           | Kubernetes package manager |
| GitHub Actions | CI automation              |
| DockerHub      | Container registry         |
| Node.js        | Backend runtime            |
| Express.js     | API framework              |
| Ingress NGINX  | Traffic routing            |

---

# 📁 Repository Structure

## Application Repository

```text
helm-argocd-node-app
│
├── .github/workflows
│   └── docker-build.yml
│
├── Dockerfile
├── .dockerignore
├── package.json
├── server.js
└── ...
```

---

## GitOps Repository

```text
helm-argocd-gitops
│
├── chart
│   └── quote-api-app
│       ├── templates
│       │   ├── deployment.yaml
│       │   ├── service.yaml
│       │   ├── ingress.yaml
│       │   └── _helpers.tpl
│       │
│       ├── Chart.yaml
│       └── values.yaml
│
└── argocd
    └── application.yaml
```

---

# ⚙️ Application Features

* Random quote generator
* REST API endpoint
* Minimal responsive UI
* Environment information
* Version information
* Helm deployment ready
* GitOps compatible

---

# 🌐 API Endpoint

## Get Random Quote

```text
/api/quote
```

Example Response:

```json
{
  "quote": "GitOps is the future of Kubernetes deployments."
}
```

---

# 🐳 Dockerization

## Docker Build

```powershell
docker build -t shivawmm1810/quote-api-app:v1 .
```

---

## Run Container

```powershell
docker run -d -p 3002:3000 --name quote-api-container shivawmm1810/quote-api-app:v1
```

---

## Access Application

```text
http://localhost:3002
```

---

# 🔄 CI/CD Workflow

## GitHub Actions Responsibilities

* Build Docker image
* Push image to DockerHub
* Clone GitOps repository
* Update Helm values image tag
* Commit updated GitOps state
* Push changes back to GitHub

---

# 🔐 GitHub Secrets

| Secret          | Purpose                          |
| --------------- | -------------------------------- |
| DOCKER_USERNAME | DockerHub username               |
| DOCKER_PASSWORD | DockerHub access token           |
| GITOPS_TOKEN    | GitHub PAT for GitOps repository |

---

# ☸️ Helm Concepts Used

## values.yaml

Centralized deployment configuration.

Examples:

```yaml
image:
  repository:
  tag:
```

---

## Templating

Dynamic Kubernetes manifest generation using:

```yaml
{{ .Values.image.tag }}
```

---

## Helpers

Reusable template helpers:

```yaml
{{ include "quote-api-app.fullname" . }}
```

---

## Conditional Rendering

Ingress created only when enabled:

```yaml
{{- if .Values.ingress.enabled }}
```

---

# 📦 Kubernetes Resources

The Helm chart dynamically creates:

* Deployment
* Service
* Ingress

---

# 🔁 ArgoCD GitOps Flow

ArgoCD continuously:

1. Watches Git repository
2. Detects desired state changes
3. Renders Helm templates
4. Applies manifests to cluster
5. Performs rolling updates
6. Detects cluster drift
7. Self-heals resources automatically

---

# 🚀 Deployment Steps

## Start Minikube

```powershell
minikube start --driver=docker
```

---

## Enable Ingress

```powershell
minikube addons enable ingress
```

---

## Start Tunnel

> Run PowerShell as Administrator

```powershell
minikube tunnel
```

---

## Verify Cluster

```powershell
kubectl get nodes
```

---

## Verify Pods

```powershell
kubectl get pods -A
```

---

# 🌍 Access ArgoCD UI

## Port Forward

```powershell
kubectl port-forward svc/argocd-server -n argocd 8081:443
```

---

## Open Browser

```text
https://localhost:8081
```

---

# 🔑 ArgoCD Login

## Username

```text
admin
```

---

## Get Password

```powershell
kubectl get secret argocd-initial-admin-secret -n argocd -o jsonpath="{.data.password}"
```

Decode:

```powershell
[System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String("<SECRET>"))
```

---

# 📄 ArgoCD Application

## application.yaml

Core ArgoCD deployment resource.

Features:

* automated sync
* prune
* selfHeal
* namespace creation

---

# 🌐 Hosts File Configuration

Open:

```text
C:\Windows\System32\drivers\etc\hosts
```

Add:

```text
127.0.0.1 quote-api.local
```

---

# 🌍 Access Application

```text
http://quote-api.local
```

---

# 🔍 ArgoCD Features Demonstrated

## Automated Sync

ArgoCD automatically applies Git changes.

---

## Self Healing

If cluster state drifts from Git:

ArgoCD restores desired state automatically.

---

## Drift Detection

ArgoCD visually shows:

```text
OutOfSync
```

when cluster differs from Git.

---

## Visual GitOps

ArgoCD UI shows:

* sync status
* health status
* deployment tree
* rollout history
* resource relationships

---

# 📈 Rolling Update Demo

Watch deployments live:

```powershell
kubectl get pods -n helm-argocd-demo -w
```

Observe:

* new pod creation
* old pod termination
* zero downtime rollout

---

# ♻️ Self-Healing Demo

Delete a pod manually:

```powershell
kubectl delete pod <pod-name> -n helm-argocd-demo
```

Kubernetes automatically recreates it.

---

# ⚠️ Drift Detection Demo

Manually edit deployment:

```powershell
kubectl edit deployment quote-api-app -n helm-argocd-demo
```

ArgoCD UI will show:

```text
OutOfSync
```

Then ArgoCD restores desired state automatically.

---

# 🧠 Important Concepts Learned

* GitOps
* ArgoCD Applications
* automated sync
* selfHeal
* drift detection
* Helm templating
* immutable deployments
* Kubernetes ingress
* rolling updates
* GitHub Actions automation
* Docker image lifecycle
* declarative deployments

---

# ⚖️ FluxCD vs ArgoCD

| FluxCD             | ArgoCD                 |
| ------------------ | ---------------------- |
| Controller-centric | Application-centric    |
| CLI-focused        | UI-focused             |
| Lightweight        | Operational visibility |
| Git reconciliation | Visual GitOps platform |

---

# 🎯 Project Outcomes

✅ Node.js API application containerized

✅ DockerHub integration completed

✅ GitHub Actions CI pipeline configured

✅ Helm chart architecture implemented

✅ ArgoCD application configured

✅ Automated GitOps deployment working

✅ Kubernetes ingress routing enabled

✅ Rolling updates functioning

✅ Immutable image deployments implemented

✅ Drift detection demonstrated

---

# 📚 Useful Commands

## Start Cluster

```powershell
minikube start --driver=docker
```

---

## Stop Cluster

```powershell
minikube stop
```

---

## Start Tunnel

```powershell
minikube tunnel
```

---

## Check Pods

```powershell
kubectl get pods -A
```

---

## Check Application Pods

```powershell
kubectl get pods -n helm-argocd-demo
```

---

## Check Services

```powershell
kubectl get svc -n helm-argocd-demo
```

---

## Check Ingress

```powershell
kubectl get ingress -n helm-argocd-demo
```

---

## Check ArgoCD Applications

```powershell
kubectl get applications -n argocd
```

---

## Check Application Details

```powershell
kubectl describe application quote-api-app -n argocd
```

---

# 🏁 Final Result

This project demonstrates a production-style GitOps deployment platform using:

* ArgoCD
* Helm
* GitHub Actions
* DockerHub
* Kubernetes
* automated reconciliation
* drift detection
* self healing
* immutable deployments

This architecture closely resembles real cloud-native Kubernetes GitOps environments used in enterprise DevOps teams.
