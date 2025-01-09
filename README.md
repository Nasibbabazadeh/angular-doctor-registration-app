
 deletePaymentById(recId: number) {
    return this.service.deletePrescriptionPaymentById(this.formId, recId).subscribe({
      next: () => {
        this.isLoading = true
        setTimeout(() => {
          this.fillPrescriptionPayments()
        }, 3000)
        this.isLoading = false
      },
    })
  }
